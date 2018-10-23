const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        //required:true
    },
    password:{
        type:String,
        //required:true
    },
    passwordConf:{
      type:String,
      //required:true
    },
//===========================BASIC=INFO
    name:{
      type:String,
      //required:true
    },
//===========================OTHER=INFO
    gender:{
        type:String,//1 = Male; 0 = Female
      },
      phone:{
        type:String,
        //required:true
      },
      univroll:{
        type:String,
        // required:true,
        // unique:true
      },
      dept:{
        type:String,
        //required:true
      },
});
//===========================================


// userSchema.statics.authenticate = function (email, password, callback) {
//   user.findOne({ email: email })
//     .exec(function (err, user) {
//       if (err) {
//         return callback(err)
//       } else if (!user) {
//         var err = new Error('User not found.');
//         err.status = 401;
//         return callback(err);
//       }
//       bcrypt.compare(password, user.password, function (err, result) {
//         if (result === true) {
//           return callback(null, user);
//         } else {
//           return callback();
//         }
//       })
//     });
// }

// userSchema.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash){
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });


var user = mongoose.model('user', userSchema);
module.exports = user;