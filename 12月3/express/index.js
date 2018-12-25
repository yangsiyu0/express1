let http = require('http');
let url = require('url');
function createApplication(){
    // app是个监听函数
    let app =(req,res)=>{
        // 取出每一个layer
        // 1.获取请求的方法
        let m = req.method.toLowerCase();
        let {pathname} = url.parse(req.url,true);

        // 通过next方法进行迭代
        let index = 0;
        function next(){
            // 如果数组全部迭代完成还没有找到 说明路径不存在
          if(index === app.routes.length) return res.end(`Cannot ${m} ${pathname}`);
          let { method, path, handler}  = app.routes[index++]; // 每次调用next就应该调取下一个layer
          if(err){
            // 如果有错误 我们应该去找错误中间件 错误中间件有个特点 (handler有四个参数)  handler.length 取参数个数
            if(handler.length === 4){
                handler(err,req,res,next);
            }else{
                // 如果没有匹配到 要将err继续传递下去
                next(err); // 继续走下一个layer继续判断
            }
          }else{
            if(method === 'middle'){ // 处理中间件
                if(path === '/' || path === pathname || pathname.startsWith(path+'/')){
                    handler(req,res,next);
                }else{
                    next();
                }
              }else{ // 处理路由
                if(( method === m || method === 'all')&&(path === pathname || path === '*')){
                    handler(req,res);
                }else{
                    next();
                }
    
              }
          }
          
        }
        next();// 中间件中的next
        /*
        for(let i =0;i<app.routes.length;i++){
            let { method, path, handler} = app.routes[i];
            if((method === m || method === 'all') && (path === pathname || path === '*')){
                handler(req,res);// 这里就是匹配成功后执行对应的callback
            }
        };
        
        */
        
        // res.end(`cannot  ${m} ${pathname}`);
    }
    app.routes= [];
    app.use = function (path,handler){
        if(typeof handler !== 'function'){
            handler = path;
            path = '/';
        }
        let layer = {
            method:'middle', // method 是middle我们就表示他是一个中间件
            path,
            handler
        }
        app.routes.push(layer); // 将中间件放到容器内
    }
    app.all = function(path,handler){
        let layer = {
            method:'all',// 如果method是all表示全部匹配
            path,
            handler
        }
    }
    http.METHODS.forEach(method=>{
        method = method.toLocaleLowerCase(); //将方法转换成小写的
        app[method] = function(path,handler){
            let layer = {
                method,
                path,
                handler
            }
    // app.get = function(path,handler){
    //     let layer = {
    //         method:'get',
    //         path,
    //         handler
    //     }
        app.routes.push(layer);
    }
    });
   
    // app.delete
    app.listen = function(){
        let server = http.createServer(app);
        server.listen(...arguments);
    }
    return app

}
module.exports = createApplication;