const mongoose = require('mongoose');
const user = mongoose.model('user');
const idea = mongoose.model('idea');
const feed = mongoose.model('feed');
const Cousnel = mongoose.model('counselling');

const SignUpCreate = function(req,res){
    user.create({
        email  : req.body.email,
        password : req.body.password
        },(err,user) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                .redirect('/login',{title:'Login'});
            }
            
        }); 
}
const Idea = function(req,res){
    idea.create({
        description:req.body.description
        },(err,idea) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                .render('student',{title:'Student Ideation'});
            }
            
        }); 
}
const FeedbackSubjectPost= function(req,res){
    feed.create({
        subjectId:req.body.subjectId,
        topics:req.body.topic
        },(err,feed) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                .render('student',{title:'Student Ideation'});
            }
            
        }); 
}
const CousnellingPost = function(req,res){
    Cousnel.create({
        title:req.body.title,
        body:req.body.Desc
        },(err,Cousnel) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                .render('student',{title:'Student Ideation'});
            }
            
        }); 
}

const LoginReaOne =  function(req,res){
//     user.create({
//        email = req.body.email,
//        password = req.body.password
//    })
}
const Detail = function(req,res){

}
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


module.exports = {
    Student,Feedback,FeedbackHostel,FeedbackSubject,Counselling,Ideation,Question,Idea,
    LoginReaOne,SignUpCreate,Detail,FeedbackSubjectPost,CousnellingPost
}