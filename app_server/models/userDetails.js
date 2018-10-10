const mongoose = require('mongoose');
const userName = new mongoose.Schema({
  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
});

const otherInfo = new mongoose.Schema({
  gender:{
    type:Boolean,
  },
  phone:{
    type:Number,
    required:true
  },
  otherphone:{
    type:Number,
  },
  parentsphone:{
    type:Number,
  },
  fid:{
    type:Number,
    required:true,
    unique:true
  },
  dept:{
    type:String,
    required:true
  },
  designation:{
    type:String,
    required:true
  },
   points:{ type: Number, default: 0},
   dob:{
     type:Date,
   }
});
const userDetailsSchema = new mongoose.Schema({
   Name :userName,

   info: otherInfo,
});

mongoose.model('userDetail',userDetailsSchema);
