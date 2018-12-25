let express = require('express');
let app = express();
app.listen(2000);

// 想区分是查询一个还是查询所有
app.get('/user',function(req,res){
    console.log(req.query.id); //express扩展的
    console.log(req.url);//获取整个路径 包括问号的 /user?id=1
    console.log(req.path); //express扩展的  //获取路径 但是不带问号 /user
    console.log(req.headers);// 所有的都是小写
    console.log(req.method); // 请求的方法，所有的方法都是大写的
    /*
    if(req.query.id){//查一个

    }else{//查所有 但上下没有逻辑关系 

    }
    那怎样查询一个 或查询所有 呢  用路径参数
    */
    
});