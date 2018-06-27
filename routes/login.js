/**
 * Created by lpw on 2018/6/27.
 */
var express = require('express');
var router = express.Router();
var dataSuccess = {
    status: '100',
    msg: '登录成功',
};
const db = require("./db")
router.post("/", function (req, res, next) {
    console.log(req.body)
    console.log("==");
    db.query("select ID,title,summary from article_table",function (err,data) {
        console.log(err)
        console.log(data)
        dataSuccess.data=data
        res.end(JSON.stringify(dataSuccess));

    });


});
module.exports = router;