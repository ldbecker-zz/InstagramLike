var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'InstagramLike' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'InstramLike - Upload a new Image'});
});

module.exports = router;
