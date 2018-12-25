let express = require('express');
let app = express();
app.listen(8080);

let fs = require('fs');
/*
function static(p){  // dist 目录下的静态文件
    return function(req,res,next){
       let path =  require('path').join(p,req.path);//我们要读取的文件
        fs.stat(path,function(err,stats){
            if(err){ // 文件不存在
                return next();
            }
            if(stats.isFile()){
                fs.createReadStream(path).pipe(res);
            }
        });
    }
}

app.use(static('dist')); // 自定义静态服务中间件
app.use(static('public'));
*/
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/index.html',function(req,res){
    res.sendFile('./dist/index.html',{root:__dirname});
})
app.get('/index.css',function(req,res){
    res.sendFile('./dist/index.css',{root:__dirname});
})