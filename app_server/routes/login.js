var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');
/* GET home page. */
router.get('/',function(req,res){
    res.render('login',{title:'login'});
});
router.post('/',ctrlMain.Login);
module.exports = router;
