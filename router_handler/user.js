//导入bcryptjs包
const bcrypt = require('bcryptjs');
//导入数据库操作模块
const db = require('../db/index');
//注册新用户处理函数
exports.regUser=(req,res)=>{
    //获取客户端提交服务器信息
    const userinfo = req.body;
    //对表单数据进行合法校验
    // if(!userinfo.username||!userinfo.password){
    //     return res.send({status:1,message:'用户名或者密码不合法'})
    // }
    //定义sql语句
    const sql = `select * from ev_users where username=?`
    db.query(sql,userinfo.username,(err,result)=>{
        //执行sql语句失败
        if(err){
            // return res.send({status:1,message:err.message})
            return res.cc(err)
        }
        //判断用户名是否被占用
        if(result.length>0){
            //  res.send({status:1,message:'用户名被占用，请更换其他用户名'});
             return res.cc('用户名被占用，请更换其他用户名')
        }
        //调用方法对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password,10);
        // 定义插入新用户sql语句
        const sql = `insert into ev_users set ?`
        //调用db.query
        db.query(sql,{username:userinfo.username,password:userinfo.password},(err,result)=>{
            // if(err){
            //     return res.send({status:1,message:err.message})
            // }
            if(err){
                    return res.cc(err);
                }
            //判断影响行数是否唯一
            if(result.affectedRows!=1){
                return res.cc('注册用户失效，请稍后再试！')
            }
            // res.send({status:0,message:'注册成功！'});
            res.cc('注册成功！',0);
        }) 
    })
}
//注册登录处理函数
exports.login=(req,res)=>{
    const userinfo = req.body;
    const sql = `select * from ev_users where username=? `
    db.query(sql,userinfo.username,(err,result)=>{
        //执行失败语句
        if(err) return res.cc(err);
        //执行sql语句成功,但是获取数据条数不等于1
        if(result.length!=1) return res.res.cc('登录失败');
        //判断密码是否正确，接受表单数据
        res.send('login ok');
    })
}
