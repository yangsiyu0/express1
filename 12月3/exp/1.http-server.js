let http = require('http');

// 1.当访问 //signin 返回登陆
// 2.当问 /signup
// 3.访问其他时 返回404
let url = require('url');
http.createServer(function(req,res){
    // 路由：根据不同的路径返回不同的内容
    let {pathname,query} = url.parse(req.url,true);
    if(pathname === '/signin'){
        // 浏览器只能发送get请求，而且只能通过问号传参，我们可以用postman模拟其它请求(校验接口是否有效)
        console.log(req.method);

        // 如果用post,通过请求体提交数据 那么如何获取请求体中的数据
        let str = '';
        req.on('data',function(chunk){
            str +=chunk;
        });
        req.on('end',function(){
            console.log(str)
        });
        res.setHeader('Content-Type','text/plain;charset=utf8');
        return res.end('登陆');
    }
    if(pathname === '/signup'){
        return res.end('注册')
    }
    res.end('404');
}).listen(8080);