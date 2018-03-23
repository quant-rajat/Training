var express = require('express');
var router = express.Router();
var users = require('./users');
var fs= require('fs');

router.use('/users', users);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
