var restify = require('restify');
var orm = require("orm");

function respond(req, res, next) {
    orm.connect("mysql://root:@127.0.0.1/phplesson", function(err, db) {
        if (err) throw err;
        var News = db.define("news", {
            newsid: {
                type: 'serial',
                key: true
            },
            newstitle: String,
            newsimg: String,
            newscontent: String,
            addtime: Date
        });
        News.find({newsid:req.params.newsid}, function(err, news) {
            //console.log(news);
            // res.send('hello ' + req.params.name);
            res.charSet("utf-8");
            res.json(news);
        });
    });

}

var server = restify.createServer();
server.get('/hello/:newsid', respond);
//server.head('/hello/:name', respond); 

server.listen(3900, function() {
    console.log('%s listening at %s', server.name, server.url);
});
