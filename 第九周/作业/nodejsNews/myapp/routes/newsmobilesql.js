//手机首页
var express=require('express');
var router=express.Router();
var orm=require('orm');
var newsTable = {
     newstitle: String,
     newscontent: String,
     newsimg: String,
     newstype: String,
     addtime: Date
 };

router.post('/', function(req, res, next) {
    orm.connect('mysql://root@127.0.0.1/my_news', function(err, db) {
        if (err) throw err;
        console.log('connect ok');
        var News = db.define('news', newsTable);
        News.find(req.body, function(err, news) {
            if (err) throw err;
            console.log('newsmobile ok');
            res.json(news);
        });
    });
});
module.exports=router;
