//导入模块
const express = require('express');
//创建路由对象
const router = express.Router();
//导入用户处理函数
const user_handler = require('../router_handler/user');
//注册新用户的
router.post('/reguser',user_handler.regUser);
//登录的路由
router.post('/login',user_handler.login);
module.exports=router