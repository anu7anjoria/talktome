const mongoose = require('mongoose');

const detailsCounselSchema = new mongoose.Schema({
    sid:{
    type:Number;
    required:true;
    },
    counselId:Number,
    type:String,
    desc:String,
    status:Boolean,
    date:Date
});


const counsellingSchema = new mongoose.Schema
({

   fid:{
     type:Number;
     required:true;
   },
   details:[detailsCounselSchema]
});

mongoose.model('counselling',counsellingSchema);
