var express = require('express');
//var ejs = require('ejs');
var app = express();
app.use(express.static('public'));
app.set('view engine','jade');//模板引擎
app.get('/backstage', function(req, res) {
	app.set('views','./views/backstage');
    res.render('index.ejs');
});
app.get('/newsmobile', function(req, res) {
	app.set('views','./views/newsmobile');
    res.render('index.ejs');
});
// app.get('/zjx', function(req, res) {
//     res.send('Hello zjx!');
// });
// app.use(express.static('public'));
// var server = app.listen(3000, function() {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log('Example app listening at http://%s:%s', host, port);
// });
// var koa=require('koa');
// var app=koa();
// app.use(function *(){
// 	this.body='Hello';
// });
 app.listen(4000);
