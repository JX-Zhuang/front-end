//后台
var express = require('express');
var router = express.Router();
var orm = require('orm');
var newsTable = {
    newstitle: String,
    newscontent: String,
    newsimg: String,
    newstype: String,
    addtime: Date,
    id: Number
};

router.get('/', function(req, res, next) {
    orm.connect('mysql://root@127.0.0.1/my_news', function(err, db) {
        if (err) throw err;
        console.log('connect ok');
        var News = db.define('news', newsTable);
        News.find({}, function(err, news) {
            if (err) throw err;
            console.log('find all');
            res.send(news);
        });
    });
});

//select查找
router.post('/select', function(req, res, next) {
    orm.connect('mysql://root@127.0.0.1/my_news', function(err, db) {
        if (err) throw err;
        console.log('connect ok');
        var News = db.define('news', newsTable);
        News.find(req.body, function(err, news) {
            if (err) throw err;
            console.log(req.body + ':' + news);
            res.json(news);
        });
    });
});

//delete删除
router.post('/delete', function(req, res, next) {
    orm.connect('mysql://root@127.0.0.1/my_news', function(err, db) {
        if (err) throw err;
        console.log('connect ok');
        var News = db.define('news', newsTable);
        News.find(req.body).remove(function(err) {
            console.log('remove ok');
            res.json({
                success: 'ok'
            });
        })
    });
});

//insert增加
router.post('/insert', function(req, res, next) {
    orm.connect('mysql://root@127.0.0.1/my_news', function(err, db) {
        if (err) throw err;
        console.log('connect ok');
        var News = db.define('news', newsTable);
        News.create(req.body, function(err, items) {
            if (err) throw err;
            console.log('insert ok');
            console.log(items);
            res.json({
                success: 'ok'
            });
        });
    });
});

//update修改
router.post('/update', function(req, res, next) {
    orm.connect('mysql://root@127.0.0.1/my_news', function(err, db) {
        if (err) throw err;
        console.log('connect ok');
        var News = db.define('news', newsTable);
        News.get(req.body.id, function(err, news) {
            news.save(req.body, function(err) {
                if (err) throw err;
                res.json({
                    success: 'ok'
                });
            });
        })
        console.log('update ok');
    });
});
module.exports = router;
