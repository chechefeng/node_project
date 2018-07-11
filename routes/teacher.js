var express = require('express');
var router = express.Router();
var dataSuccess = {
    status: '000000',
    msg: '成功',
}
const db = require("./db")

router.get('/', function (req, res, next) {
    console.log("前端响应get=======")
    console.log(req.query)
    // console.log("=====")



    if(req.query.th){
        db.query(`select * from teacher ${req.query.course !=0 ? `where course= '${req.query.course}' `:""}`,function (err,data) {
            console.log("数据库返回===",data)
            // res.render('teacher', {data: data});

            if(req.query.course!=0){
                dataSuccess.data=data
                res.end(JSON.stringify(dataSuccess))
            }else {
                res.render('teacher', {data: data});

            }
        })
    }



});

module.exports = router;