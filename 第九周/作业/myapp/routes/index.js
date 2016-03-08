var express = require('express');
var router = express.Router();
var orm = require('orm');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile('./public/html/index.html');
});
router.get('/backstage', function(req, res, next) {
    res.sendfile('./public/html/backstage/index.html');
});
router.get('/newsmobile', function(req, res, next) {
    res.sendfile('./public/html/newsmobile/index.html');
});
module.exports = router;
