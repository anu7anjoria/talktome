var express = require('express');
var router = express.Router();
var ctrlHod = require('../controllers/hod.controller.js');

router.get('/',ctrlHod.Hod);
router.get('/assigntask',ctrlHod.AssignTask);
router.get('/subjects',ctrlHod.Subjects);


module.exports = router;