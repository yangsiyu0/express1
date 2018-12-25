/*
字节
字节（Byte）是计算机存储时的一种计量单位
一个字节等于8位 一个位就代表一个0或1
每8个位（bit）组成一个字节
字节是通过网络传输信息的单位
一个字节最大值是255（2^8-1=255）


字符编码
1. 什么是字符编码
ASCLL编码一共规定了128个字符的编码,比如大写的字母A是65 
utf8编码里一个汉字需要使用3个字节存储


缓存区对象Buffer
Buffer类是一个可以在任何模块使用的全局类
Buffer好比由字节组成的数组
Buffer是固定长度的，存放的字节数需要提前确定
可以使用NEW关键字来创建该类的实例
    -构造函数中指定以字节为单位的缓存区的大小
    -使用一个字节数组来初始化缓存区
    -直接使用一个字符串初始化buffer
var str = "杨思雨"
str.length === 3
// 字符串转换为buffer
var buf = new Buffer(str,'utf8')
buf.length = 9

//原型方法 buffer转为字符串
buf.toString(); // "杨思雨"

//Buffer方法一 （类方法）isBuffer 判断是否为buffer对象
Buffer.isBuffer(buf) // true
Buffer.isBuffer(str) // false
//Buffer方法二  byteLength 计算一个字符串的字节数
Buffer.byteLength('杨思雨') //9
// Buffer方法三  concat用于将几个buffer对象合并成新的对象
var buf1 = new Buffer('a');
var buf2 = new Buffer('b');
var result = Buffer.concat(buf1,buf2); // <Buffer 61 62 63>
result.toString();//'ab'



*/