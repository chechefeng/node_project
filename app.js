var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var articlelist = require('./routes/articlelist');
var teacher = require('./routes/teacher');
var upload = require('./routes/upload');
var cash = require('./routes/cash');
var profit = require('./routes/profit');
const cluster = require('cluster');
var session = require('express-session');

// console.log(cluster.isMaster);


// const mysql = require("mysql");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

// console.log(app.locals)

// 使用 session 中间件
app.use(session({
    secret : 'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 300, // 设置 session 的有效时间，单位毫秒
    },
}));



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false,uploadDir:'./uploads' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads',express.static(path.join(__dirname, 'uploads')))

app.use('/', index);
app.use('/users', users);
app.use('/cash', cash);
app.use('/upload', upload);
app.use('/profit', profit);
app.use('/login', login);
app.use('/articlelist', articlelist);
app.use('/teacher', teacher);
app.use('/articlelist/add', articlelist);
app.use(function (req,res,next) {

    // console.log("userName",req.session.userName);
    // console.log("path",req.path);
    if(!req.session.userName&& req.path !="/login"){
        res.redirect('/login');

    }
    // next()
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("errrrrrrrr")
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
