var express = require('express');
var router = express.Router();
var ctrlCoc = require('../controllers/coc.controller.js');

router.get('/',ctrlCoc.Coc);
router.get('/assigntask',ctrlCoc.AssignTask);
router.get('/mytask',ctrlCoc.MyTask);
router.get('/openforum',ctrlCoc.OpenForum);
router.get('/facultydetail',ctrlCoc.FacultyDetail);

module.exports = router;