var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/consent', function(req, res, next) {
  var i_d = "user";
  var count = 1;
  var random_id = i_d + count;

  var random_base = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  return res.json({
    code: i_d
  });
});

router.get('/reject', function(req, res, next){

});

module.exports = router;
