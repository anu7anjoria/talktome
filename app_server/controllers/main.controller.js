var mongoose = require('mongoose');
var user = mongoose.model('user');

const Home = function(req,res){
    res
    .render('index',{title:'Home'});
};

const SignUp = function(req,res){
    user.create({
        email  : req.body.email,
        password : req.body.psw
    },(err,user)=>{
        if(err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .render('detail',{title:'Detail'});
        }
    });
}

const Login = function(req,res){
    // user.findOne({email:'emal@gmail.com'
    // }, (err, user)=>{
    //     if(err){
    //         console.log('error');
    //     }
    //     else{
    //         console.log(">>>> " + user ); 
    //     }
    // });
}   

module.exports = {
    SignUp,Home,Login
};
