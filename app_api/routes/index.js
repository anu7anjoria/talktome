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

//SignUp===============================================================================================SignUP
router.post('/signup',ctrlMain.SignUpCreate);
router.get('/login',ctrlMain.LoginReaOne);

//STUDENT=============================================================================================STUDENT
router.post('/student/ideation',ctrlStudent.CreateIdea);
router.get('/student/ideation/:ideaId',ctrlStudent.IdeaReadOne);
router.get('/student/ideation',ctrlStudent.DisplayUser);


//router.post('/student/counselling',ctrlStudent.CreateCounselling);
router.get('/student/counselling/:counselId',ctrlStudent.CounsellingReadOne);
router.post('/student/counselling/prcounsel',ctrlStudent.CousnellingPost);

//router.post('/student/feedback',ctrlStudent.CreateFeedback);
router.get('/student/feedback/:feedId',ctrlStudent.FeedbackReadOne);

//FACULTY=============================================================================================FACULTY

router.post('/faculty/postanswer',ctrlFaaculty.PostAnswerCreate);
router.get('/faculty/postanswer/:postId',ctrlFaaculty.PostAnswerReadOne);
//router.put('/faculty/postanswer/:postId',ctrlFaaculty.PostAnswerUpdate);

//COUNSELLOR=========================================================================================COUNSELLOR

router.post('/counsellor/giveappointment',ctrlCounsellor.GiveAppointmentCreate);
router.get('/counsellor/giveappointment/:appointId',ctrlCounsellor.AppointReadOne);

router.post('/counsellor/postarticle',ctrlCounsellor.PostArticleCreate);
router.get('/counsellor/postarticle/:articleId',ctrlCounsellor.PostArticleReadOne);

router.post('/counsellor/writeback',ctrlCounsellor.ReplyCreate);


router.get('/counsellor/viewproblem',ctrlCounsellor.ProblemReadAll);
router.get('/counsellor/viewproblem/:issueId',ctrlCounsellor.ProblemReadOne);

//HOSTEL==========================================

router.get('/hostelincharge/viewproblem',ctrlHostelIncharge.HostelProblemReadAll);

//MODERATOR=======================================
router.post('/moderator/response',ctrlModerator.ReplyCreate);

//HOD==============================================
router.post('/hod/assigntask',ctrlHod.AssignTaskCreate);

//COC==============================================
router.post('/coc/assigntask',ctrlCoc.AssignTaskCreate);
// router.get('/coc/mytask',ctrlCoc.MyTaskReadAll);
// router.get('/coc/openforum',ctrlCoc.OpenForumReadAll);
// router.get('/coc/facultydetail',ctrlCoc.FacultyDetail);

//router.get('/hod/subjects',ctrlFaaculty.SubjectReadAll);

router.post('/student/feedback/subject/askquestion',ctrlStudent.AskQuestionPost);
module.exports = router;