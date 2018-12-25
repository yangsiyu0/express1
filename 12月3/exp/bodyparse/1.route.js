let express = require('express');
let app = express();
app.listen(3000);

// /user/login
let user = require('./routes/user');
/*
function bodyParser(){
    return function(req,res,next){
        let str='';
        req.on('data',function(chunk){
            str += chunk;
        });
        req.on('end',function(){
           req.body = require('querystring').parse(str);
            next();
        });
    }
}
app.use(bodyParser());
*/
let bodyParser = require('body-parser');
// 解析表单格式 把表单内的数据 解析后放在req.body上
app.use(bodyParser.urlencoded({extended:false}));
// 解析json格式 把json字符串转化成对象 解析后放在req.body上
app.use(bodyParser.json());
app.use('/user',user)

// 告诉他页面上所有的render方法中的html 都用ejs模板来渲染
app.engine('html',require('ejs').__express);
// 更改模板路径 默认叫views
app.set('views','static');
// 配置默认模板后缀名字
app.set('view engine','html');

// /article/post
let article = require('./routes/article');
app.use('/article',article);

