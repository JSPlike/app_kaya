var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  UserCode: String,
  UserType: String,
});

module.exports = mongoose.model('user_code', userSchema);
