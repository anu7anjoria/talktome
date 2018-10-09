var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');
/* GET home page. */

router.get('/',function(req,res){
    res.render('signup',{title:'Sign Up'});
});

router.get('/detail',function(req,res){
    res.render('detail',{title:'SignUp - Details'});
});

router.post('/',ctrlMain.SignUp);

module.exports = router;
