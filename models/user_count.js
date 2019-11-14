var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userCount = new Schema({
  AgreeUser : Number,
  RejectUser : Number
});
