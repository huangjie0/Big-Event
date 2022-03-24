//导入bcryptjs包
const bcrypt = require('bcryptjs');
//导入数据库操作模块
const db = require('../db/index');
//注册新用户处理函数
exports.regUser=(req,res)=>{
    //获取客户端提交服务器信息
    const userinfo = req.body;
    //对表单数据进行合法校验
    if(!userinfo.username||!userinfo.password){
        return res.send({status:1,message:'用户名或者密码不合法'})
    }
    //定义sql语句
    const sql = `select * from ev_users where username=?`
    db.query(sql,userinfo.username,(err,result)=>{
        //执行sql语句失败
        if(err){
            return res.send({status:1,message:err.message})
        }
        //判断用户名是否被占用
        if(result.length>0){
            return res.send({status:1,message:'用户名被占用，请更换其他用户名'});
        }
        //调用方法对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password,10);
    })

}
//注册登录处理函数
exports.login=(req,res)=>{
    res.send('login ok');
}
