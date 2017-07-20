var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var mysql = require('mysql');
var dbConfig = require('./db/DBconfig');
var pageSQL = require('./db/sql');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var identityKey = 'skey';
var users = require('./db/users').items;
var findUser = function(name,password){
  return users.find((item)=>{
       return item.name === name && item.password === password;
   });
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    name: identityKey,
    secret: 'czr',  // 用来对session id相关的cookie进行签名
    store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: false,  // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 10 * 1000  // 有效期，单位是毫秒
    }
}));
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });
var connection = mysql.createConnection(dbConfig.mysql);
connection.connect();

app.post('/login',function(req,res,next){//登陆接口
    var sess = req.session;
    // var param = req.query || req.params;
      console.log(req.body.name)
    var user = findUser(req.body.name,req.body.password);
    if(user){
        req.session.regenerate(function(err) {
            if(err){
                return res.json({ret_code: 2, ret_msg: '登录失败'});
            }

            req.session.loginUser = user.name;
            res.json({ret_code: 0, ret_msg: '登录成功'});
        });
    }else{
        res.json({ret_code: 1, ret_msg: '账号或密码错误'});
    }
});
// 退出登录
app.get('/logout', function(req, res, next){
    // 备注：这里用的 session-file-store 在destroy 方法里，并没有销毁cookie
    // 所以客户端的 cookie 还是存在，导致的问题 --> 退出登陆后，服务端检测到cookie
    // 然后去查找对应的 session 文件，报错
    // session-file-store 本身的bug

    req.session.destroy(function(err) {
        if(err){
            res.json({ret_code: 2, ret_msg: '退出登录失败'});
            return;
        }

        // req.session.loginUser = null;
        res.clearCookie(identityKey);
        // res.redirect('/');
          res.json({ret_code: 0, ret_msg: '登出成功'});
    });
});
app.get('/getListLimit', function(req, res) {//获取首页的商品列表信息
    var param = req.query || req.params;
    console.log(param.limit)
    console.log(param.offset)
    connection.query('select * from stuff  limit '+param.offset+','+param.limit, function(err, result) {
        if (!err) {
            res.send(result);
        } else {
            console.log(err)
        }
    });
});
app.get('/getStuff', function(req, res) {//获取单个商品的详细信息
    var param = req.query || req.params;
    //  console.info(param)
    //  哈哈哈哈
    connection.query('select * from stuff where stuffId = ?', [param.id], function(err, result) {
        if (!err) {
            res.send(result[0]);
        } else {
            console.log(err)
        }
    });
});
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
