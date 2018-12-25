let express = require('express');
// 引用express模块，express是个函数

let app =express(); // express函数执行后，返回的是一个http的监听函数，就是http.createServer中的函数

// 在此函数中扩展了一个listen可以监听端口
app.listen(80,function(){
    console.log('start80');
});
/*
require('http').createServer(app).listen(80);
// app.listen 就是基于以前封装的
app.listen = function(...args){
    require('http').createServer(app).listen(...args);
}
*/