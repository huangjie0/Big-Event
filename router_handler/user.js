//注册新用户处理函数
exports.regUser=(req,res)=>{
    //获取客户端提交服务器信息
    const userinfo = req.body;
    //对表单数据进行合法校验
    if(!userinfo.username||!userinfo.password){
        return res.send({status:1,message:'用户名或者密码不合法'})
    }
    res.send('reguser ok');
}
//注册登录处理函数
exports.login=(req,res)=>{
    res.send('login ok');
}
