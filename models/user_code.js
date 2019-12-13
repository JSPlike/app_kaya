var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  UserCode: String,
  UserType: String,
  IPaddress: String,
  Click_Time: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('user_code', userSchema);
