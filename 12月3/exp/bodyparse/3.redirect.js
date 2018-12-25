let express = require('express');
let app = express();
app.listen(8080);
app.get('/',function(req,res){
   // res.redirect('http://www.baidu.com') //重定向
   /*
   res.setHeader('Location','http://www.baidu.com');
   res.statusCode(302);
   res.end();
   下面三句和上面一句等价
   */
   
});