let express = require('express');
let app = express();
app.listen(8080);
// 目的 
// /user?id=1查一个 /user查所有 发现路径都是/user 在express中分不开 那怎么办呢
// /user/1 表示查一个
// /user 查所有  区分查多个还是查一个
app.get('/user',function(req,res){
    res.end('select all');
}); 

// 表示id是占位符 必须有 但是可以随机
// /user/1/2 =>{id:1,name:2}=>params 一一对应
app.get('/user/:id/:name',function(req,res){
    res.end('select one' + req.params.id + req.params.name);
});
// 如何匹配到的
let url = '/user/2/3';
let url2 = '/user/:id/:name';
let arr = [];
let newReg = url2.replace(/:[^\/]+/g,function(){
    arr.push(arguments[0].slice(1)); //[id,name]
    return '([^\/]+)'
});
let reg = new RegExp(newReg);
let newArr = reg.exec(url);
console.log(newArr);
let result ={};
arr.forEach(function(item,index){
    result[item] = newArr[index+1]
});
console.log(result);