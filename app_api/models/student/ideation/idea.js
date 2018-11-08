const mongoose = require('mongoose');
// const detailsIdeaSchema = new mongoose.Schema({
//   sid:{
//     type:Number,
//     //required:true
//   },
//   type:String,
//   description:{type:String,default:'Some description'},
//   status:Boolean,
//   date:Date,
//   upvotes:Number
// });

const ideaSchema = new mongoose.Schema
({
  ideaId:Number,
   sid:{
     type:String,
     //required:true
   },
   userEmail:String,
   description:{type:String},
   status:String,
   date:{type:Date,default:Date.now},
   upvotes:{type:Number,default:0}
});

mongoose.model('idea',ideaSchema);
