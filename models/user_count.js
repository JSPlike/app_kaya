var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userCountSchema = new Schema({
  AgreeUser: Number,
  RejectUser: Number
});

module.exports = mongoose.model('user_count', userCountSchema);
