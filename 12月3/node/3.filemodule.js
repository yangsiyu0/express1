/*
内置模块 fs
同步和异步方法
fs.readFile(filename,[options],callback)读取文件内容
fs.writeFile(filename,data,[options],callback) 写入文件内容
fs.mkdir(path,callback)创建目录
fs.readdir(path,callback)读取目录
fs.stat(path,callback)查看文件或目录信息
fs.exists(path,callback)判断文件或目录是否存在

*/
var fs = require('fs');
// 1.先判断这个模块是不是内置模块
// 2.如果不是内置模块的话会找node_modules目录

// 异步读取
fs.readFile('1.txt','utf8',function(err,data){
    // err是错误对象
    //data是数据对象
    // 如果不写编码 得到的数据类型就是buffer对象数据
    if(err){
        console.log('文件读取失败')
    }else{
        console.log(data);
    }
});

// 同步读取 (性能很差，一般只有读取配置文件的时候才会使用)
try{
var data = fs.readFileSync('2.txt','utf8'); // 线程是阻塞de  怎么捕获错误呢 try catch
}catch(e){
    console.log('文件读取失败')
}
console.log(data); // undefined

//异步读取
fs.writeFile('3.txt','zf','utf-8',function(err,data){
    if(err){
        console.log('写入文件失败')
    }
});
// 同步读取
fs.writeFileSync('2.txt','zf','utf8');


//copy
function copy(src,dest){
    fs.readFile(src,function(err,data){});
}