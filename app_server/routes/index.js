var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');
var ctrlHod = require('../controllers/hod.controller.js');
var ctrlHostelIncharge = require('../controllers/hostel.controller.js');
var ctrlMain = require('../controllers/main.controller.js');
var ctrlModerator = require('../controllers/moderator.controller.js');
var ctrlStudent = require('../controllers/student.controller.js');
var ctrlCoc = require('../controllers/coc.controller.js');
var ctrlCounsellor = require('../controllers/counsellor.controller.js');
var ctrlFaaculty = require('../controllers/faculty.controller.js');
var mongoose =require('mongoose');
var User = mongoose.model('user');
var Idea = mongoose.model('idea');
var Feed = mongoose.model('feed');
var Counsel = mongoose.model('counselling');
//Home page
//router.get('/', ctrlMain.Home);

//Course Coordinator
router.get('/coc',ctrlCoc.Coc);
router.get('/coc/assigntask',ctrlCoc.AssignTask);
router.get('/coc/mytask',ctrlCoc.MyTask);
router.get('/coc/openforum',ctrlCoc.OpenForum);
router.get('/coc/facultydetail',ctrlCoc.FacultyDetail);

//Counsellor
router.get('/counsellor/r',ctrlCounsellor.DisplayCounsellor);
router.get('/counsellor/giveappointment',ctrlCounsellor.GiveAppointment);
router.get('/counsellor/postarticle',ctrlCounsellor.PostArticle);
router.get('/counsellor/viewproblem',ctrlCounsellor.ViewProblem);
router.get('/counsellor/writeback',ctrlCounsellor.CounselReply);

//Faculty
router.get('/faculty/r',ctrlFaaculty.DisplayQues);
// router.get('/faculty/assignfinal',ctrlFaaculty.AssignFinal);
// router.get('/faculty/assigntostudent',ctrlFaaculty.AssignToStudent);
router.get('/faculty/postanswer',ctrlFaaculty.PostAnswer);
router.get('/faculty/stats',ctrlFaaculty.Stats);

router.post('/faculty/postanswer',ctrlFaaculty.SendDataToStudent);
router.post('/faculty/assigntostudent',ctrlFaaculty.AssignPost);
router.post('/faculty/studentlist',ctrlFaaculty.addStudent);
router.get('/faculty/studentlist',function(req,res){
    res.render('./faculty/studentlist');
});
//Head Of Deoartment
router.get('/hod',ctrlHod.Hod);
router.get('/hod/assigntask',ctrlHod.AssignTask);
router.get('/hod/subjects',ctrlHod.Subjects);

//Hostel Incharge
router.get('/hostelincharge',ctrlHostelIncharge.HostelIncharge);
router.get('/hostelincharge/markcomplete',ctrlHostelIncharge.MarkComplete);
router.get('/hostelincharge/viewproblem',ctrlHostelIncharge.ViewProblem);

//Moderator
router.get('/moderator/r',ctrlModerator.DisplayIdea);
router.get('/moderator/mostrecent',ctrlModerator.MostRecent);
router.get('/moderator/mostrecentapprove',ctrlModerator.MostRecentApprove);
router.get('/moderator/mostrecentreject',ctrlModerator.MostRecentReject);
router.get('/moderator/mostupvoted',ctrlModerator.MostUpvoted);
router.post('/moderator/response',ctrlModerator.ReolyToStudent);
router.get('/moderator/response',function(req,res){
    res.render('./moderator/reasonpost');
})

//Student
router.get('/student/r',ctrlStudent.AnswerReadOne);
router.get('/student/counselling',ctrlStudent.Counselling);
router.get('/student/counselling/prcounsel',function(req,res){
    res.render('./student/counselling/tcounsel');
});
router.get('/student/feedback',ctrlStudent.Feedback);
router.get('/student/feedback/feedbackhostel',ctrlStudent.FeedbackHostel);
router.get('/student/feedback/subject',ctrlStudent.FeedbackSubject);

router.get('/student/ideation',ctrlStudent.Ideation);
router.get('/student/ideation/response',ctrlStudent.ShowModReply);

router.post('/student/ideation',ctrlStudent.Idea);


router.post('/student/feedback/subject',ctrlStudent.FeedbackSubjectPost);
router.post('/student/counselling/prcounsel',ctrlStudent.CousnellingPost);
router.post('/student/feedback/subject/askquestion',ctrlStudent.AskQuestionPost);
router.get('/student/feedback/subject/askquestion',ctrlStudent.AskQuestion);


// router.post('/student/ideation',ctrlStudent.Idea);
// router.post('/student/feedback/question',ctrlStudent.AskQuestion);
// router.post('/login',ctrlMain.LoginReaOne);
// router.get('/login',function(req,res){
//     res.render('login',{title:'Login'})
// });

// router.get('/login-faculty',function(req,res){
//     res.render('login-faculty',{title:'Login | Faculty'})
// });

// router.post('/signup',ctrlMain.SignUpCreate);
// router.get('/signup',function(req,res){
//     res.render('signup',{title:'SignUp'})
// })
// router.get('/logout', function (req, res, next) {
//   if (req.session.user && req.cookies.user_sid) {
//     res.clearCookie('user_sid');
//     res.redirect('/');
// } else {
//     res.redirect('/login');
// }
//   });
//router.get('/signup/detail',ctrlStudent.Detail);
module.exports = router;