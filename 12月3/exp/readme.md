## 搭建服
```
let express = require('express');
let app = express();
app.listen(8080);
```

## express 路由
- 必须method和path全部匹配上执行对应的callback
```
app[method](path,function(){});
app.all('*',function(){});
```

## 路径参数路由
- 将匹配收到的结果生成一个对象放到req.params上
```
app.get('/user/:id/name')
```
## req的属性
```
req.params 路径参数
req.url 整个的路径
req.path pathname路径
req.headers 请求头
req.method 请求的方法
req.query 获取请求的参数 问号后面的参数
```

## middleware
- 中间件的作用
    - 处理公共逻辑，扩展req,res
    - 可以决定是否继续执行
    - 开头匹配到就会执行中间件
    - 错误中间件，在页面的最后，参数是4个，第一个参数中是错误

## res基本上新增的方法
    -res.json()
    -res.sendFile() 绝对路径 path.join/path.resolve
    -res.send();

## 用户管理模块
- 登陆 /login
- 注册 /reg
## 文章管理模块
- 发表文章 /post
- 删除文章 /delete

## 路由拆分
```
let express = require('express');
let app = express();
let router = express.Router();
router.get('/login',fn);
app.use('/user',router)

```

## bodyParser
```
app.use(bodyParser.json()); //解析json
app.use(bodyParser.urlencoded({extented:true})); //解析表单  application/x-www-form-urlencoded
```

## ejs (前后端分离不使用ejs)
```
app.set('view engine','html');
app.set('views','static');
app.engine('html',require('ejs'.__express));
res.render('index',渲染的数据);
```
- ejs用法
<%for(var i =0;i<10;i++){%>
    <li><%=i%></li>
<%}%>
 
## 静态服务中间件
```
app.use(express.static('文件夹'))
```

## 重定向
```
res.redirect('路径')
```