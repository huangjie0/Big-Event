//导入express
const express = require('express');
//创建服务器对象
const app = express();

//启动服务器
app.listen(3007,()=>{
    console.log('api server running at http://127.0.0.1:3007')
})