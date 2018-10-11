const mongoose = require('mongoose');
// const counsel = mongoose.model('counsel');
// const feed = mongoose.model('feed'); 
const idea = mongoose.model('idea');
const question = mongoose.model('question');
// //Buisness Logic Start

const Idea = function(req,res){
    idea.detailsIdeaSchema.create({
    description : req.body.ideadesc
    },(err,idea)=>{
        if(err){
            res
                .status(404)
                .json(err);
        }
        else{
            res.render('student/ideation/ideation');
        }
    });
}
const displayQuestion = function(req,res){
    question.find({}, (err, question)=>{
        if(err){
            console.log('error');
        }
        else{
            res.render('student/feedback/question',{"question":question});
        }
    });
}
const AskQuestion = function(req,res){
    question.create({
        title:req.body.questiontitle,
        body:req.body.question
    },(err,question)=>{
        if(err){
            res
                .status(404)
                .json(err);
        }
        else{
            res.render('ask question succfully');
        }
    })
}
//Buisenss Logic End


//Rendering Start

const Student = function(req,res){
    res.
        render('./student/student',{title:'Student'});
}
const Counselling = function(req,res){
    res.
        render('./student/counselling/counselling',{title:'Student - Counselling'});
}
const Feedback = function(req,res){
    res.
        render('./student/feedback/feedback',{title:'Student - Feedback'});
}
const FeedbackHostel = function(req,res){
    res.
        render('./student/feedback/hostel',{title:'Student - Feedback - Hostel'});
}
const FeedbackSubject = function(req,res){
    res.
        render('./student/feedback/subject',{title:'Student - Feedback - Subject'});
}
const Ideation = function(req,res){
    res.
        render('./student/ideation/ideation',{title:'Student - Idea'});
}
const Question = function(req,res){
    res.
        render('./student/feedback/question',{title:'Student - Question'});
}
//REndering End
module.exports = {
    Student,Feedback,FeedbackHostel,FeedbackSubject,Counselling,Ideation,Question,
    Idea,AskQuestion,displayQuestion
};