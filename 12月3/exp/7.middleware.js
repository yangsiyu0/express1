// 中间件，当我们访问到最终目标之前执行的函数

let express = require('express');
let app = express();
app.listen(8080);

// 1.中间件的第一个功能 可以进行权限判断
//2.可以进行对req res的属性进行扩充
// 3.中间件放在要执行路径的上面
// 4.中间件默认情况下都匹配，可以指定匹配什么开头的
app.use('/water',function(req,res,next){ // 不调用next就不继续往下执行
    console.log('过滤石头');
    req.stone = 'toobig'
    next();
});
app.use('water',function(req,res,next){
    res.sand = 'too small';
    console.log('过滤沙子');
    next();
});
app.use(function(req,res,next){
    res.header('Content-Type','text/plain;charset=utf-8');
    next();
});
app.get('/water',function(req,res){
    console.log(req.sand,req.stone);
    res.end('water');
});
app.get('/food',function(req,res){
    console.log(req.sand,req.stone);
    res.end('food');
});
app.use(function(err,req,res,next){ // 错误中间件拥有4个参数
    console.log(err)
});