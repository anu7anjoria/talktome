var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main.controller.js');

router.get('/',function(req,res){
    res.render('aboutus',{title:'Aboutus'});
});

router.post('/',ctrlMain.About);
module.exports = router;