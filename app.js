//导入包
const express = require('express');
const Joi = require('joi');
//创建服务器对象
const app = express();
//导入并配置cors中间件
const cors = require('cors');
app.use(cors());
//配置解析表单数据中间件,解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({extended:false}));
//封装res.cc函数
app.use((req,res,next)=>{
    //status默认值为1，表示失败的情况
    //err可能是一个错误对象也可能是一个错误描述字符串
    res.cc=function(err,status=1){
        res.send({
            status,
            message:err instanceof Error ? err.message : err,
        })
    }
    next();
})
//导入路由模块
const userRouter = require('./router/user');
app.use('/api',userRouter);
//定义错误级别的中间件
app.use((err,req,res,next)=>{
    if(err instanceof Joi.ValidationError){
        //未知的错误
        res.cc(err)
    }
    res.cc(err);
})
//启动服务器
app.listen(3007,()=>{
    console.log('api server running at http://127.0.0.1:3007')
})