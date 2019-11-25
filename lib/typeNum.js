var usercode = require('../models/user_code');

module.exports = function ANum(){
  var aNum = usercode.find({UserCode: 'AB'}.count(), (err, user){
    if(err) console.log(error)
    else {
      if(user == [] || user == null || user == undefined || user == {} || user == '[]')
        aNum = 0;
      }
    });
    
  return aNum;
};

module.exports = function BNum(){
  var bNum = usercode.find({UserCode: 'BA'}.count(), (err, user){

    if(err) console.log(error)
    else {
      if(user == [] || user == null || user == undefined || user == {} || user == '[]')
        bNum = 0;
    }
  });
  return bNum;
};
