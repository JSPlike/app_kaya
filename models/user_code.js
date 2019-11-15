var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userList = new Schema({
  UserCode : {type: String},
});

module.exports = mongoose.model('user_code', userList);
