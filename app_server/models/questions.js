const mongoose = require('mongoose');

const question = new mongoose.Schema({
        title:String,
        body:String,
        date: { type: Date, default: Date.now },
});

mongoose.model('question',question);