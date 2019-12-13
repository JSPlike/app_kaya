var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// usercode schema
var userSchema = new Schema({
  UserCode: String,
  UserType: String,
  IPaddress: String,
  Enviroment: String,
  Click_Time: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('user_code', userSchema);
