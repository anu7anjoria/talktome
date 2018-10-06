var mongoose = require('mongoose');
var user = mongoose.model('user');
module.exports.Home = function(req,res){
    res
    .render('index',{title:'Home'});
};
const SignUp = function(req,res){
    user.create({
        emailid: req.body.email,
        password:req.body.psw
    },(err,user)=>{
        if(err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .render('login',{title:'login'});
        }
    });
}

// const Login = function(req,res){
//     user.findById({
//         emailid: req.body.email,
//         password:req.body.psw
//     },(err,user)=>{
//         if(err){
//             res
//                 .status(404)
//                 .json(err);
//         }
//         else{
//             res
//                 .send('login done');
//         }
//     });
// }
module.exports = {
    SignUp
};
