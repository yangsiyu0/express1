let express = require('express');
let app = express();
app.listen(3000);
//app监听函数上 扩展了很多方法 包括get post delete put restful风格中的动词

// app.方法名（‘路径名’，fn） 路径指的是pathname 没有问号后面的内容
// 从上到下匹配如果匹配到了并且并结束响应 就不会继续往下走
// express 重点是扩展了req和res属性
app.get('/signin',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end('登陆');
})
app.post('/signin',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end('post登陆')
})
app.get('/signup',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end('注册')
})
// all表示所有的方法  *表示所有的路径，一般放到最后
app.all('*',function(req,res){
    res.end('404');
});