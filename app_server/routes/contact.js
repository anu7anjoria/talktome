var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');

router.get('/',function(req,res){
    res.render('contact',{title:'Contact'});
});

router.post('/',ctrlMain.Contact);
module.exports = router;