var express = require('express');
var router = express.Router();
const models = require('../models');
const multer = require('multer');
var upload = multer({dest: './public/files'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'InstagramLike' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'InstramLike - Upload a new Image'});
});

router.post('/uploadHandler', upload.single('file'), function(req, res) {
  res.status(200).send({msg: "done"});
});

module.exports = router;
