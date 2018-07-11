var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log("index=====")
    // console.log(req.session)
    // res.render('index');

    if(req.session.userName){
        res.render('index');

    }
    next()
});

module.exports = router;
