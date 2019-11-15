var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userCount = new Schema({
  AgreeUser : Number,
  RejectUser : Number
});

module.exports = mongoose.model('user_count', userCount);
