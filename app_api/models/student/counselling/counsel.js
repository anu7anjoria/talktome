const mongoose = require('mongoose');

// const detailsCounselSchema = new mongoose.Schema({
//     counselId:{type:Number,required:true},
//     title:String,
//     body:String,
//     date: { type: Date, default: Date.now },
    
// });


const counsellingSchema = new mongoose.Schema
({

   fid:{
     type:Number,
     //required:true
   },
   userEmail:String,
   counselId:{type:String},
   phoneId:{type:Number},
   title:String,
   description:String,
   date: { type: Date, default: Date.now },
});

mongoose.model('counselling',counsellingSchema);
