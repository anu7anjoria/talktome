var express = require('express');
var router = express.Router();
var ctrlFaaculty = require('../controllers/faculty.controller.js');

router.get('/',ctrlFaaculty.Faculty);
router.get('/assignfinal',ctrlFaaculty.AssignFinal);
router.get('/assigntostudent',ctrlFaaculty.AssignToStudent);
router.get('/postanswer',ctrlFaaculty.PostAnswer);
router.get('/stats',ctrlFaaculty.Stats);

router.post('/postanswer',ctrlFaaculty.Fac);

module.exports = router;