var express = require('express');
var router = express.Router();
var ctrlModerator = require('../controllers/moderator.controller.js');

router.get('/',ctrlModerator.Moderator);
router.get('/mostrecent',ctrlModerator.MostRecent);
router.get('/mostrecentapprove',ctrlModerator.MostRecentApprove);
router.get('/mostrecentreject',ctrlModerator.MostRecentReject);
router.get('/mostupvoted',ctrlModerator.MostUpvoted);
router.get('/response',ctrlModerator.Response);


module.exports = router;