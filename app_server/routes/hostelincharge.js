var express = require('express');
var router = express.Router();
var ctrlHostelIncharge = require('../controllers/hostel.controller.js');

router.get('/',ctrlHostelIncharge.HostelIncharge);
router.get('/markcomplete',ctrlHostelIncharge.MarkComplete);
router.get('/viewproblem',ctrlHostelIncharge.ViewProblem);

module.exports = router;