var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');
var ctrlMain = require('../controllers/main.controller.js');
var ctrlModerator = require('../controllers/moderator.controller.js');
var ctrlStudent = require('../controllers/student.controller.js');
var ctrlCounsellor = require('../controllers/counsellor.controller.js');
var ctrlFaaculty = require('../controllers/faculty.controller.js');
var mongoose =require('mongoose');
var User = mongoose.model('user');
var Idea = mongoose.model('idea');
var Feed = mongoose.model('feed');
var Counsel = mongoose.model('counselling');
//Home page=============================================================================================

router.get('/', ctrlMain.Home);

//Counsellor=============================================================================================

router.get('/counsellor/displaycounsel',ctrlCounsellor.DisplayCounsellor);
router.get('/counsellor/writeback',function(req,res) {
    res.render('./counsellor/writeback');
});
router.post('/counsellor/writeback',ctrlCounsellor.CounselReply);

//Faculty================================================================================================

router.get('/faculty/display',ctrlFaaculty.DisplayQues);
router.get('/faculty/postanswer',ctrlFaaculty.PostAnswer);
router.get('/faculty/studentlist',function(req,res){
    res.render('./faculty/studentlist');
});

router.post('/faculty/postanswer',ctrlFaaculty.SendDataToStudent);
router.post('/faculty/assigntostudent',ctrlFaaculty.AssignPost);
router.post('/faculty/studentlist',ctrlFaaculty.addStudent);

//Moderator===============================================================================================

router.get('/moderator/newlysubmitted',ctrlModerator.DisplayIdea);
router.get('/moderator/response',function(req,res){
    res.render('./moderator/reasonpost');
})

router.post('/moderator/response',ctrlModerator.ReolyToStudent);

//Student=================================================================================================
router.get('/student/feedback/response',ctrlStudent.AnswerReadOne);
router.get('/student/counselling',ctrlStudent.Counselling);
router.get('/student/counselling/prcounsel',function(req,res){
    res.render('./student/counselling/tcounsel');
});
router.get('/student/feedback',ctrlStudent.Feedback);
//router.get('/student/feedback/feedbackhostel',ctrlStudent.FeedbackHostel);
router.get('/student/feedback/subject',ctrlStudent.FeedbackSubject);

router.get('/student/ideation',ctrlStudent.Ideation);
router.get('/student/ideation/response',ctrlStudent.ShowModReply);

router.get('/student/feedback/subject/askquestion',ctrlStudent.AskQuestion);

router.post('/student/ideation',ctrlStudent.Idea);
router.post('/student/feedback/subject',ctrlStudent.FeedbackSubjectPost);
router.post('/student/counselling/prcounsel',ctrlStudent.CousnellingPost);
router.post('/student/feedback/subject/askquestion',ctrlStudent.AskQuestionPost);

module.exports = router;