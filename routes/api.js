var express = require('express');
var router = express.Router();
var path = process.cwd();

var mailHandler = require('../middleware/mailHandler.js');

router.get('/about', function(req, res, next) {
    res.type('json').sendFile(path + '/data/about.json');
});

router.get('/works', function(req, res, next) {
    res.type('json').sendFile(path + '/data/works.json');
});

router.post('/sendMail', mailHandler);

router.get('/footer', function(req, res, next) {
    res.type('json').sendFile(path + '/data/footer.json');
});

module.exports = router;
