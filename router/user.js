//导入模块
const express = require('express');
//创建路由对象
const router = express.Router();
//导入用户处理函数
const user_handler = require('../router_handler/user');
//导入数据的中间件
const expressJoi = require('@escook/express-joi');
//导入需要的验证对象
const {reg_login_schema} = require('../schema/user');
//注册新用户的
router.post('/reguser',expressJoi(reg_login_schema),user_handler.regUser);
//登录的路由
router.post('/login',expressJoi(reg_login_schema),user_handler.login);
module.exports=router