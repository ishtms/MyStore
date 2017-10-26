var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/company', function(req, res, next) {
  res.render('company');
});

router.get('/payment', function(req, res, next) {
  res.render('payment');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/shopping', function(req, res, next) {
  res.render('shopping');
});

router.get('/login', function(req,res,next){
  res.render('login')
})


module.exports = router;
