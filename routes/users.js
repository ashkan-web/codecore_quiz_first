var express = require('express');
var router = express.Router();
const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // a week in milliseconds
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signIn');
});

module.exports = router;
