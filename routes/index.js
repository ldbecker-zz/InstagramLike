var express = require('express');
var router = express.Router();
const models = require('../models');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/files')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'InstagramLike' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'InstramLike - Upload a new Image'});
});

router.post('/uploadHandler', upload.single('file'), function(req, res) {
  var opts = JSON.parse(req.body.opts);
  models.Images.create({
    filename: opts.fileName,
    uploader: opts.username,
    caption: opts.caption,
    hashtags: opts.hashtags
  }).then(function(resp) {
    res.status(200).send(resp);
  }).catch(function(resp) {
    res.status(500).send(resp);
  })
});

router.post('/search', function(req, res, next) {
  //if search query is empty, just get 10 newest images.

});

module.exports = router;
