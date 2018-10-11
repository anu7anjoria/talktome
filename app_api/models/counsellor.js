const mongoose = require('mongoose');
const giveAppintment = new mongoose.Schema({
    Student:String,
    studentID:Number,
    title:String,
    body:String,
    apdate: { type: Date, default: Date},
});
const postArticle = new mongoose.Schema({
    title:String,
    body:String,
    date: { type: Date, default: Date.now },
});
const reply = new mongoose.Schema({
    title:String,
    body:String,
    date: { type: Date, default: Date.now },
});
const counselSchema = new mongoose.Schema({
    give_Appintment:[giveAppintment],
    post_Article:[postArticle],
    Reply:[reply]
});

mongoose.model('counsellor',counselSchema);