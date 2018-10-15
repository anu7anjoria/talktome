const mongoose = require('mongoose');

const question = new mongoose.Schema({
        title:String,
        body:String,
        date: { type: Date, default: Date.now },
        upvote:Number,
        level:{type:Number,default: 0 }
});

mongoose.model('question',question);