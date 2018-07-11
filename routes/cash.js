var express = require('express');
var router = express.Router();
var dataSuccess = {
    status: '000000',
    msg: '成功',
}
const db = require("./db")

router.get('/', function (req, res, next) {
    console.log("前端响应get=======")
    console.log(req.query);
    db.query(`select * from money`,function (err,data) {
        console.log("数据库返回===",data)
        // res.render('teacher', {data: data});

        // if(req.query.course!=0){
        //     dataSuccess.data=data
        //     res.end(JSON.stringify(dataSuccess))
        // }else {
            res.render('cash', {data: data});

        // }
    })
    // res.render('cash', {data: "现金"});


});

module.exports = router;