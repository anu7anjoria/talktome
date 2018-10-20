const mongoose = require('mongoose');
const subTopic = new mongoose.Schema({
    subtopic:[String]
});
const topic = new mongoose.Schema({
    topic:String,
    subtopic:[subTopic]
});
const cho = new mongoose.Schema({
    subjectId:String,
    subjectName:String,
    title:[topic]
});
mongoose.model('cho',cho);