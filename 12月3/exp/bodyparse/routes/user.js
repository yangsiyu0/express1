let express = require('express');
let router = express.Router(); // 创建一个路由池子
// router也是一个函数
let path = require('path');
router.get('/login',function(req,res){
    res.end('登录');
});
router.get('/reg',function(req,res){
    res.sendFile(path.join(__dirname,'../views/reg.html'));
    // res.sendFile(path.resolve('../views/reg.html'));
});
router.post('/reg',function(req,res){
    console.log(req.body);
    console.log(req.headers['content-type']);
    // res.render('result.ejs',req.body);//ejs 渲染页面
    // 开头路径不能是/
    res.render('result.ejs',{...req.body,arr:[1,2,3,4,5]})
    //通过请求体传数据
    /*
     let str = '';
    req.on('data',function(chunk){
        str+=chunk;
    });
    req.on('end',function(){
        console.log(str); //username=11&password=1  如何把它变成对象
        });
    */
   

        // console.log(require('querystring').parse(str)); // node自带的模块
        /*
        方法一
         let obj={};
        str.replace(/([^&=]+)=([^&=]+)/,function(){
            obj[arguments[1]] = arguments[2];
        })
        console.log(obj);
        */
       
    
});
module.exports = router;
/*
// path 是根据运行文件的位置来解析的 
console.log(path.resolve('../views/reg.html'));    //  c:\Users\daxing\Desktop\学习资料\12月3\exp\views\reg.html
console.log(path.join(__dirname,'../views/reg.html')); // c:\Users\daxing\Desktop\学习资料\12月3\exp\bodyparse\views\reg.html
*/
