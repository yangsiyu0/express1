// 每次调用use方法都会将方法存到数组中，默认调用数组的第一项，将next方法传递到数组中的函数参数。如果调用此函数，会继续执行数组中的下一项
app.middleware = [];
app.use = function(cb){
    this.middleware.push(cb); // [fn,fn,fn]
}
app.use(function(req,res,next){
    console.log(1);
    next();
});
app.use(function(req,res,next){
    console.log(2);
    next();
});
app.use(function(req,res,next){
    console.log(3);
    next();
});
var index = 0;
function next(){
    app.middleware[index++](null,null,next);
}
next();