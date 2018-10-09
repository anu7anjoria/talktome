const mongoose = require('mongoose');
const detailsIdeaSchema = new mongoose.Schema({
  sid:{
    type:Number;
    required:true;
  },
  ideaId:Number,
  type:String,
  description:String,
  status:Boolean,
  date:Date,
  upvotes:Number
});

const ideaSchema = new mongoose.Schema
({
   mid:{
     type:Number;
     required:true;
   },
   details:[detailsIdeaSchema]
});

mongoose.model('idea',ideaSchema);
