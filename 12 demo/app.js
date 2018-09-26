//引入express
var express = require('express');
var app = express();
var path = require('path');
//引入的ejs插件
var ejs = require('ejs');
//设置html引擎
app.set('view engine', 'html');
//设置视图地址
app.set('views', path.join(__dirname, '/views'));
//设置html引擎
app.engine('html', require('ejs').__express);
//静态文件
app.use(express.static('public'));


var indexController = require('./controllers/IndexController');
app.get('/index', indexController.index);
app.get('/slider', indexController.slider);

app.listen(8888);