//导入express
const express = require('express');
//创建服务器对象
const app = express();
const joi = require('@hapi/joi');
//导入并配置cors中间件
const cors = require('cors');
app.use(cors());
//定义错误级别的中间件
app.use((err,req,res,next)=>{
    //验证失败导致的错误
    if(err instanceof joi.ValidationError){
        return res.send({status:1,message:err.message});
    }
    res.send({status:1,message:'未知的错误'});
    // next();
})
//配置解析表单数据中间件,解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({extended:false}));
//导入路由模块
const userRouter = require('./router/user');
app.use('/api',userRouter);
//启动服务器
app.listen(3007,()=>{
    console.log('api server running at http://127.0.0.1:3007')
})