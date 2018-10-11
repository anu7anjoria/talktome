const mongoose = require('mongoose');
const reply = new mongoose.Schema({
    title:String,
    body:String,
    date: { type: Date, default: Date.now },
});
const modSchema = new mongoose.Schema({
    Reply:[reply],
});

mongoose.model('moderator',modSchema);