// var express=require('express');
// var app=express();
// app.set('view engine','ejs');//模板引擎
// app.set('views',__dirname + '/views');
// app.use(express.static(__dirname));
// app.get('/',function(req,res) {
// 	res.render('home.ejs',{name:'zjx'});
// });
var express = require('express');
var app = express();
app.set('view engine','ejs');//模板引擎
app.set('views',__dirname + '/views');
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.render('home.ejs');
});
app.get('/request/:id',function(req,res){
	var locals={name:'zjx','id':req.params['id']};
	res.render('home.ejs',locals);
});
app.listen(3000);
