let express = require('express');
let app = express();
app.listen(8080); 
app.use(function(req,res,next){
    let t = new Date().getTime(); //访问最初的时间
    let end = res.end;
    res.end = function(...arg){
        console.log(new Date().getTime()-t);
        end.call(res,...arg);
    }
    next();
});
app.get('/water',function(req,res){
    for(let i=0;i<1000;i++){

    }
    res.end('water');  //  
})
app.get('/food',function(req,res){
    for(let i=0;i<100000;i++){

    }
    res.end('food');
})
