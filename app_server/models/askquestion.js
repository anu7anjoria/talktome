const mongoose = require('mongoose');

const askquestion = new mongoose.Schema({
        title:String,
        body:String,
        date: { type: Date, default: Date.now },
        upvote:Number,
        level:{type:Number,default: 0 }
});

mongoose.model('askquestion',askquestion);