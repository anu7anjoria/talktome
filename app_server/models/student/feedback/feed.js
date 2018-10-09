const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subjectId:Number,
  subjectName:String,
  totalStudents:Number
});

const facultySchema = new mongoose.Schema
({
   subject:[subjectSchema]
});

const detailsFeedSchema = new mongoose.Schema({
    sid:{
    type:Number;
    required:true;
     },
    feedId:Number,
    subjectId:Number,
    topics:Array,
    status:Boolean,
    dateAssigned:Date,
    dateCompleted:Date
});
const feedSchema = new mongoose.Schema
({
   fid:
   {
     type:Number;
     required:true;
   },
   details:[detailsFeedSchema]
});

mongoose.model('feed',feedSchema);
