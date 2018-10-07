var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');
/* GET home page. */
router.get('/',function(req,res){
    res.render('signup',{title:'signup'});
});
router.post('/',ctrlMain.SignUp);

module.exports = router;
