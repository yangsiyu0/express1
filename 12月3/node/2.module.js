
/*
自定义模块的定义，导出和加载
如何定义和加载包
NPM的常用命令
*/
// var obj = require('./buffer.js');
// console.log(obj.sum(1,2));
console.log(__filename);//c:\Users\daxing\Desktop\学习资料\12月3\node\2.module.js
console.log(__dirname) // c:\Users\daxing\Desktop\学习资料\12月3\node

// function(exports,require,module,__filename,__dirname){
//     var sum = function(a,b){
//         return a+b;
//     }
//     exports.sum = sum;
//     return module.exports;
// }
// exports 默认导出对象
// require 是加载其它模块的方法
// module 代表当前的模块对象 module.exports
// __filename 是当前模块的绝对路径
// __dirname 是当前模块所有的绝对目录
