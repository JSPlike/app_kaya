var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/consent', function(req, res, next) {
  var i_d = "user";
  var count = 1;
  var random_id = i_d + count;

  console.log(random_id);
});

module.exports = router;
