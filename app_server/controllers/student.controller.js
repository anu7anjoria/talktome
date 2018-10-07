// const mongoose = require('mongoose');
// const counsel = mongoose.model('counsel');
// const feed = mongoose.model('feed'); 
// const idea = mongoose.model('idea');

// //Buisness Logic Start
// const Idea = function(req,res){
    
// };

// const Counsel = function(req,res){

// }

// const Feed = function(req,res){

// }
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
//REndering End
module.exports = {
    Student,Feedback,FeedbackHostel,FeedbackSubject,Counselling,Ideation,
    //Idea,Feed,Counsel
};