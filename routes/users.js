var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json({
    message: "this is user page"
  });
});

module.exports = router;
