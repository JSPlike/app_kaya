var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/consent', function(req, res, next) {
  var i_d = "user";
  var count = 1;
  var random_id = i_d + count;

  return res.json({
    code: i_d
  });
});

module.exports = router;
