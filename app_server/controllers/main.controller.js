const request = require('request');
const mongoose = require('mongoose');
const user = mongoose.model('user');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = '';
}

const SignUpCreate = function(req,res){
    const path = '/api/signup';
    const requestOption = {
      url : apiOptions.server + path,
      method : 'POST',
      json : {
          email:req.body.email,
          password:req.body.password,
          passwordConf:req.body.passwordConf,
        //   dept:req.body.dept,
        //   batch:req.body.batch,
        //   name:req.body.name,
        //   gender:req.body.gender,
        //   univroll:req.body.univroll,
        //   phone:req.body.phone
      },
      qs : {}
    };
    request(
        requestOption,
        (err,response,body)=>{
            let data=body;
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                    .render('./student/student',{data:data});
            }
        }
      );
}
const StudentDetails = function(req,res){
    const path = '/api/signup/detail';
    const requestOption = {
      url : apiOptions.server + path,
      method : 'POST',
      json : {
        fname:req.body.dfname,
        lname:req.body.dlname,
        gender:req.body.dgender,
        phone:req.body.dphone,
        otherphone:req.body.dotherphone,
        parendphone:req.body.dparendphone,
        dept:req.body.ddept,
        sid:req.body.dsid
      },
      qs : {}
    };
    request(
        requestOption,
        (err,response,body)=>{
            let data=body;
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                    .render('./student/student',{title:'LogIn'});
            }
        }
      );
}
const LoginReaOne = function(req,res){
    const path = '/api/login';
    const requestOption = {
      url : apiOptions.server + path,
      method : 'POST',
      json : {
          email:req.body.lemail,
          password:req.body.lpassword
      },
      qs : {email:req.body.lemail,
        password:req.body.lpassword}
    };
    request(
        requestOption,
        (err,response,body)=>{
            let data=body;
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                User.findOne({_id:data
                },(err,user) => {
                    if(err){
                        res
                            .status(400)
                            .json(err);
                    }
                    else{
                        console.log(data);
                    }
                });
            }
        }
      );
}
const Home = function(req,res){
    res
    .render('index',{title:'Home'});
};



module.exports = {
    Home,LoginReaOne,SignUpCreate,StudentDetails
};
