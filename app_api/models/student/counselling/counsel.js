const mongoose = require('mongoose');

const detailsCounselSchema = new mongoose.Schema({
    counselId:{type:Number,required:true},
    title:String,
    body:String,
    date: { type: Date, default: Date.now },
    
});


const counsellingSchema = new mongoose.Schema
({

   fid:{
     type:Number,
     required:true
   },
   details:[detailsCounselSchema]
});

mongoose.model('counselling',counsellingSchema);
