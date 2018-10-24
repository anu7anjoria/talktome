const mongoose = require('mongoose');

const questionAns = new mongoose.Schema({
        sId:String,
        subjectId:String,
        title:String,
        description:String,
        date: { type: Date, default: Date.now },
});
        
mongoose.model('questionAns',questionAns);