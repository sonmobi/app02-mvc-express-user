var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


const User = require('../models/user.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Trang chủ")


  res.render('index');

});

module.exports = router;