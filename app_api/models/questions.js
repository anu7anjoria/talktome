const mongoose = require('mongoose');

const question = new mongoose.Schema({
        sId:String,
        emailofStudent:String,
        subjectId:String,
        title:String,
        description:String,
        date: { type: Date, default: Date.now },
        upvote:Number,
        level:{type:Number,default: 0 }
});

mongoose.model('question',question);