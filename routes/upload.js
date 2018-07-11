var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log("index=====")
    // console.log(req.session)
    // console.log(path)
    // console.log(__dirname)

    res.render('upload',{ title : 'Express' ,image:"1111"});
});

router.post("/add", upload.single("image"),function (req,res,next) {

    console.log('====================================================');

    console.log(req.file)
    // console.log(res.download())
    // req.flash('success', '文件上传成功!');
    // res.json({"result":{message:"文件上传成功!"}});
    // 输出文件信息
    console.log('fieldname: ' + req.file.fieldname);
    console.log('originalname: ' + req.file.originalname);
    console.log('encoding: ' + req.file.encoding);
    console.log('mimetype: ' + req.file.mimetype);
    console.log('size: ' + (req.file.size / 1024).toFixed(2) + 'KB');
    console.log('destination: ' + req.file.destination);
    console.log('filename: ' + req.file.filename);
    console.log('path: ' + req.file.path);



    // console.log(req)
    var image=req.file.path;
    var originalname = req.file.originalname;
    var filename = req.file.filename;
    var path = req.file.destination;
    console.log(path)
    // fs.readFile("uploads/",function(err,data){
    //     console.log("111",err)

        fs.rename(`uploads/${filename}`,`uploads/${originalname}`,function (err,data) {
            console.log("2222",err)
            // console.log(data)
            res.render('upload')
        })

    // })

    // res.render('upload', { title : 'Express' ,image:image});

})

// router.post("/add", upload.single('test-upload'), function (req,res,next) {
//     console.log('====================================================');
//
//     console.log(req.file)
//     // req.flash('success', '文件上传成功!');
//     // res.json({"result":{message:"文件上传成功!"}});
//     // 输出文件信息
//     console.log('fieldname: ' + req.file.fieldname);
//     console.log('originalname: ' + req.file.originalname);
//     console.log('encoding: ' + req.file.encoding);
//     console.log('mimetype: ' + req.file.mimetype);
//     console.log('size: ' + (req.file.size / 1024).toFixed(2) + 'KB');
//     console.log('destination: ' + req.file.destination);
//     console.log('filename: ' + req.file.filename);
//     console.log('path: ' + req.file.path);
// })
module.exports = router;
