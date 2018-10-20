const mongoose = require('mongoose');

// const subjectSchema = new mongoose.Schema({
//   subjectId:Number,
//   subjectName:String,
//   totalStudents:Number
// });

// const facultySchema = new mongoose.Schema
// ({
//    subject:[subjectSchema]
// });

// const detailsFeedSchema = new mongoose.Schema({
//     sid:{
//     type:Number,
//     required:true
//      },
//     feedId:Number,
//     subjectId:Number,
//     topics:Array,
//     status:Boolean,
//     dateAssigned:Date,
//     dateCompleted:Date
// });


const feedSchema = new mongoose.Schema
({
   fid:
   {
     type:Number,
     //required:true
   },
   feedId:Number,
   subjectId:String,
   topics:["ds","adbms","java"],
   body:{type:String},
   status:{type:Boolean,default:false},
   dateAssigned:{type:Date,default:Date.now},
   dateCompleted:Date
});

mongoose.model('feed',feedSchema);
