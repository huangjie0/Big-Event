//导入mysql模块
const mysql = require('mysql');
//创建数据库连接对象
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'test'
})
//暴露db数据库连接对象
module.exports=db;