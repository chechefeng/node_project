var express = require('express');
var router = express.Router();
const db = require("./db")
var {select, insert}= require("./sql")
var dataSuccess = {
    status: '000000',
    msg: '成功',
}
/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("前端响应get=======")
    // console.log(req.cookie)
    if (req.query.grade) {
        db.query(`select * from grade${req.query.grade} ${req.query.classes? `where classes= ${req.query.classes} `:""}`, function (err, data) {
            // console.log(err)

            // console.log("数据库返回===",data)
            // next()
            if(req.query.classes){
                dataSuccess.data=data
                res.end(JSON.stringify(dataSuccess))
            }else {
                res.render('articlelist', {data: data});

            }

        });
    } else {
        res.end()
    }

});

router.post('/add', function (req, res, next) {
    console.log("前端响应=======")
    console.log(req.session)
    // console.log("=====")
    // res.send(dataSuccess);

    if (req.body.studentId) {
        //INSERT INTO hk_test(username, passwd) VALUES ('qmf2', 'qmf2'),('qmf3', 'qmf3'),('qmf4', 'qmf4'),('qmf5', 'qmf5')
        let {studentId, name, classes, age, tel, address, tuition, headmaster, sex, grade}=req.body
        db.query(`INSERT INTO grade${req.body.grade}(studentId, name,classes,age,tel,address,tuition,headmaster,sex) VALUES ("${studentId}","${name}","${classes}","${age}",${tel},"${address}",${tuition},"${headmaster}",${sex})`, function (err, data) {
            console.log("err======", err)
            console.log("数据库返回", data)
            if(!err){
                res.redirect(`/articlelist?grade=${req.body.grade}`)

            }

        });

    } else {
        res.end()
    }

});
module.exports = router;
