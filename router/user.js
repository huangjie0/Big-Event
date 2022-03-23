//导入模块
const express = require('express');
//创建路由对象
const router = express.Router();
//注册新用户的
router.post('/reguser',(req,res)=>{
    res.send('reguser OK')
})
//登录的路由
router.post('/login',(req,res)=>{
    res.send('login OK')
})

module.exports=router