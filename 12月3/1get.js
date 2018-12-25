// express是个函数

let express = require('./express');
//app 监听函数
let app = express();

app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();
});
app.use('/name',function(req,res,next){
    console.log('middleware');
    next('名字不合法');

})
app.get('/name',function(req,res){ // req代表的是请求 res代表的是响应
    res.end('杨思雨');
})
app.get('/age',function(req,res){
    res.end('9')
});
app.post('/name',function(req,res){
    res.end('post name')
});
// all代表的是匹配所有的方法 *表示匹配所有的路径
app.all('*',function(req,res){
    res.end(`fdgfd`)
});

// 错误中间件（4个参数）放到路由的下面
app.use(function(err,req,res,next){
    console.log(err);
    next(err);
});
app.use(function(err,req,res,next){
    console.log(err);
});

app.listen(3100,function(){
    console.log('server start 3000');
});