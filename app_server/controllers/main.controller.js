var mongoose = require('mongoose');
var user = mongoose.model('user');

const Home = function(req,res){
    res
    .render('index',{title:'Home'});
};

const About = function(req,res){

};

const Contact = function(req,res){

};

const SignUp = function(req,res){
    user.create({
        username:req.body.uname,
        emailid :req.body.email,
        password:req.body.psw
    },(err,user)=>{
        if(err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .render('login',{title:'Login'});
        }
    });
}

const Login = function(req,res){
    user.findOne({
    },(err,user)=>{
        if(err){
        res
            .status(404)
            .json(err);
        }
        else if(user.emailid=='ak' && user.password=='ak'){
            res.send('Logged in Sucessfully');
        }
    });
}

module.exports = {
    SignUp,Home,Login,About,Contact
};
