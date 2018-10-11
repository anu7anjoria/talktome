var express = require('express');
var router = express.Router();
var ctrlStudent = require('../controllers/student.controller.js');

router.get('/',ctrlStudent.Student);
router.get('/counselling',ctrlStudent.Counselling);
router.get('/feedback',ctrlStudent.Feedback);
router.get('/feedback/feedbackhostel',ctrlStudent.FeedbackHostel);
router.get('/feedback/subject',ctrlStudent.FeedbackSubject);

router.get('/ideation',ctrlStudent.Ideation);

router.post('/ideation',ctrlStudent.Idea);

module.exports = router;