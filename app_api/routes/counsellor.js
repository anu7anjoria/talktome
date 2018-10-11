var express = require('express');
var router = express.Router();
var ctrlCounsellor = require('../controllers/counsellor.controller.js');

router.get('/',ctrlCounsellor.Counsellor);
router.get('/giveappointment',ctrlCounsellor.GiveAppointment);
router.get('/postarticle',ctrlCounsellor.PostArticle);
router.get('/viewproblem',ctrlCounsellor.ViewProblem);
router.get('/writeback',ctrlCounsellor.WriteBack);

module.exports = router;