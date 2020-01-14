const mongoose = require('mongoose');

var User = mongoose.model('User', {
   name: { type: String },
   email: { type: String },
   mobileNo: { type:Number },
   address: { type: String },
   pinCode: { type: Number }
});

module.exports = {User};
