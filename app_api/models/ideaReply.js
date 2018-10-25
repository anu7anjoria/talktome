const mongoose = require('mongoose');
const ideaReplySchema = new mongoose.Schema
({
   sid:{
     type:String,
     //required:true
   },
   
   description:{type:String},
   status:String,
   date:{type:Date,default:Date.now},
});

mongoose.model('IdeaReply',ideaReplySchema);
