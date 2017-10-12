var express = require('express');
var router = express.Router();
var path = process.cwd();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path + '/index.min.html');
});

module.exports = router;
