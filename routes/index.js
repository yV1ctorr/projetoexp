var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.render('index', req.query);
});

router.get('/:title/:projeto', function(req, res, next) {
  console.log(req.params)
  res.render('index', req.params);
});

module.exports = router;
