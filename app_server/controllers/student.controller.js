//const mongoose = require('mongoose');
// const counsel = mongoose.model('counsel');
// const feed = mongoose.model('feed'); 
// const idea = mongoose.model('idea');
// const question = mongoose.model('question');
//Buisness Logic Start

const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = '';
}

var renderHomepage = function(req, res){
    res.render('contact', {
    title: 'Loc8r - find a place to work with wifi',
    });
   };
   module.exports.homelist = function(req, res){
    renderHomepage(req, res); 
};
// const Idea = function(req,res){

// }

// const displayQuestion = function(req,res){
//     const path = '/api/student/feedback/question';
//     const requestOptions = {
//       url : apiOptions.server + path,
//       method : 'GET',
//       json : {},
//       qs : {
//         title:req.body.title,
//         body:req.body.body,
//         data:req.body.data
//       }
//     };
//     request(
//         requestOptions,
//         (err, response, body) => {
//           let data = body;
//           if (response.statusCode === 200 && data.length) {
//             for (let i = 0; i < data.length; i++) {
//                 data[i].title;
//                 data[i].body;
//                 data[i].data;            }
//           }
//           _renderQuestionPage(req, res, data);
//         }
//       );
// }
//Buisenss Logic End





//Rendering Start

// const _renderQuestionPage = function(req, res, responseBody){
//     res.render('/student/feedback/question', {
//         title:'Here is some title',
//         body:'here is body'
//     });
//   };    

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

var requestOptions = {
    url : "http://localhost:3000/api/student/ideation",
    method : "GET",
    json : {},
    qs : { 
    offset : 20
    }
   }; 
   request(requestOptions, function(err, response, body) {
    if (err) { 
    console.log(err);
    } else if (response.statusCode === 200) { 
    console.log(body); 
    } else { 
    console.log(response.statusCode); 
    }
   }); 
module.exports = {
    Student,Feedback,FeedbackHostel,FeedbackSubject,Counselling,Ideation,Question,
    renderHomepage
};