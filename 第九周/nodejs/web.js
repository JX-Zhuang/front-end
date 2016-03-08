// //1、引入node.js核心模块http。
// var http = require('http');
// //2、调用http的createServer()方法。
// var web = http.createServer(function(req, res) {
//     res.end('hello world')
// });
// //3、listen()方法监听一个端口。
// web.listen(3000);
var express = require('express');
var app = express();
app.listen(3000);
/*路由：
	将不同的请求，分配给相应的处理函数
	区分：路径、请求方法
*/
//path app后面跟http请求方法，get、post、head、options、put、delete、trace
app.get('/path1', function(req, res) {
    res.end('hello path1');
});
app.post('/path2', function(req, res) {
    res.send('hello path2');
});

//Router  同一个路由下的多个子路由
var Router = express.Router();
Router.get('/first', function(req, res) {
    res.end('hello first Router');
});
Router.get('/second', function(req, res) {
    res.end('hello second Router');
});
//加入app基础配置
app.use('/Router', Router);


//route  一个路由，不同方法不同的处理
app.route('/route')
    .get(function(req, res) {
        res.end('route:get');
    })
    .post(function(req, res) {
        res.end('route:post');
    });
//读取路由参数
app.param('id', function(req, res, next, _id) {
    req.id = _id;
    next();
});
app.get('/:id', function(req, res) {
    res.end('id:' +req.id);
});

