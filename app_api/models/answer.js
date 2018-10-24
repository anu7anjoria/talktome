const mongoose = require('mongoose');

// const extraClass = new mongoose.Schema({
//     dateOfClass:{ type: Date, default: Date},
//     numberOfStudent:Number,
//     place:{type:String,default:'Square one'}
// });
// const assignStudent = new mongoose.Schema({
//     Student:String,
//     studentID:Number,
//     title:String,
//     body:String,
//     date: { type: Date, default: Date.now },
//     endDate:{ type: Date, default: Date},
// });
const postAnswer = new mongoose.Schema({
    title:String,
    body:String,
    date: { type: Date, default: Date.now },
    stuid:String,
});
// const facSchema = new mongoose.Schema({
//     fid:Number,
//     post_answer:[postAnswer],
//     assign_to_stu:[assignStudent],
//     facultyPerformandce:Number
// });

var answer = mongoose.model('answer',postAnswer);
module.exports = answer;