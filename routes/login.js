/**
 * Created by lpw on 2018/6/27.
 */
var express = require('express');
var router = express.Router();

router.get("/",function (req,res,next) {
    res.render('login');

})
router.post("/admin", function (req, res, next) {
    console.log("==");
    console.log(req.body);



    // username: username,
    // password: password
    if(req.body.username == 'admin' && req.body.password == 'admin123'){
        console.log(req.body)

        req.session.userName = req.body.username; // 登录成功，设置 session
        res.redirect('/');
    }
    else{
        res.json({ret_code : 1, ret_msg : '账号或密码错误'});// 若登录失败，重定向到登录页面
    }

});
module.exports = router;