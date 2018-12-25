let express = require('express');
let app = express();
app.listen(3000);
// 不能直接返回对象 res.json() //返回json
// 返回html页面 res.sendFile()  //返回文件
// res.statusCode res.end =>res.sendStatus();
// res.end()  res.header();
app.get('/json',function(req,res){
    res.json({name:'zf',age:9}); // 返回json
});
app.get('/',function(req,res){
    // 不能通过../查找（root是不支持的）想读取到确切的文件 用path模块进行拼接即可
    res.sendFile(require('path').join(__dirname,'..','index.html'));
    // res.sendFile('./index.html',{root:__direname});
    // res.sendFile(__direname+'./index.html');

});
app.get('/status',function(req,res){
    res.sendStatus(500);
})
app.get('/send',function(req,res){
    res.send({name:'zf'});
});

/*
function mySend(data){
    if(typeof data ==='string'){
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        return res.end(data);
    }
    if(typeof data === 'number'){
        res.statusCode =data;
        return res.end(require('_http_server').STATUS_CODES[data]);
    }
    if(typeof data ==='object'){
        res.setHeader('Content-Type','application/json;charset=utf-8');
        return res.end(JSON.stringify(data));
    }
}
*/