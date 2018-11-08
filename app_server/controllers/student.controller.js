const mongoose = require('mongoose');
const user = mongoose.model('user');
const idea = mongoose.model('idea');
const feed = mongoose.model('feed');
const Cousnel = mongoose.model('counselling');
const question = mongoose.model('question');
const questionAns = mongoose.model('questionAns');
const ideaReply = mongoose.model('IdeaReply')
const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://talktomechitkara.herokuapp.com';
}
const AnswerReadOne = function(req,res){
    user_id = req.session.user;
    var emailId = user_id.email;
    questionAns.find(
        {sId:emailId},function(err,questionAns){
        if(err) {
            console.log("There was a problem finding the ticket.");
        } else {
            //console.log(questionAns);
            res.render('./student/feedback/dispques',{ data:questionAns })
         }
    })   
}

const AskQuestionPost = function(req,res){
    const path = '/api/student/feedback/subject/askquestion';
    const user_id = req.session.user;
    const requestOption = {
      url : apiOptions.server + path,
      method : 'POST',
      json : {
        user_id:user_id,
        emailofStudent:user_id.email,
        subjectId:req.body.qsubjectId,
        title:req.body.qtitle,
        description:req.body.qdescription,
      },
      qs : {}
    };
    //console.log(req.session.user);
    request(
        requestOption,
        (err,response,body)=>{
            let data=body;
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                    .render('./student/feedback/feedback',{title:'Student | Deedback'});
            }
        }
      );
}

const Idea = function(req,res){
    const path = '/api/student/ideation';
    const user_id = req.session.user;
    const requestOption = {
      url : apiOptions.server + path,
      method : 'POST',
      json : {
        userEmail:user_id.email,
        sid:user_id,
        description:req.body.idescription,
      },
      qs : {}
    };
    request(
        requestOption,
        (err,response,body)=>{
            let data=body;
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                    .render('./student/feedback/feedback',{title:'Student | Deedback'});
            }
        }
      );
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
                .render('./student/feedback/feedback',{title:'Student Feedback'});
            }
            
        }); 
}
const CousnellingPost = function(req,res){
    const path = '/api/student/counselling/prcounsel';
    const user_id = req.session.user;
    const requestOption = {
      url : apiOptions.server + path,
      method : 'POST',
      json : {
          userEmail:user_id.email,
          phoneId:user_id.phone,
          counselId:user_id,
          title:req.body.ctitle,
          description:req.body.cdescription,
      },
      qs : {}
    };
    request(
        requestOption,
        (err,response,body)=>{
            let data=body;
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                    .render('./student/feedback/feedback',{title:'Student | Counselling'});
            }
        }
      );
}

const ShowModReply = function(req,res){
    const user_id = req.session.user;
     ideaReply.findOne({
        sid:user_id.email
    },(err,ideaReply) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
         res.render('./student/ideation/response',{data:ideaReply});
        }
    })
}

const Detail = function(req,res){
    res.render('./StudentProfile',{title:'Your Details'});
}
const Student = function(req,res){
    res.render('./student/student',{title:'Student'});
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
const AskQuestion = function(req,res){
    res.
        render('./student/feedback/askquestion',{title:'Student - Question'});
}

module.exports = {
    Student,Feedback,FeedbackHostel,FeedbackSubject,Counselling,Ideation,Question,Idea,
    Detail,FeedbackSubjectPost,CousnellingPost,AskQuestion,AskQuestionPost,AnswerReadOne,ShowModReply
}