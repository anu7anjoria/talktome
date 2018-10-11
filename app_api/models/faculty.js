const mongoose = require('mongoose');

const assignStudent = new mongoose.Schema({
    Student:String,
    studentID:Number,
    title:String,
    body:String,
    date: { type: Date, default: Date.now },
    endDate:{ type: Date, default: Date},
});
const postAnswer = new mongoose.Schema({
    title:String,
    body:String,
    date: { type: Date, default: Date.now },
});
const facSchema = new mongoose.Schema({
    fid:Number,
    post_answer:[postAnswer],
    assign_to_stu:[assignStudent],
    facultyPerformandce:Number
});

mongoose.model('fac',facSchema);