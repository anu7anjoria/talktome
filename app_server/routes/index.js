var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');

/* GET home page. */
router.get('/', ctrlMain.Home);


module.exports = router;
