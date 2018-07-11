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
    res.render('profit', {data: "利润"});


});

module.exports = router;