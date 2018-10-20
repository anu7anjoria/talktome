const request = require('request');
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
          password:req.body.password
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
                    .render('login',{title:'LogIn'});
            }
        }
      );
}


const LoginReaOne = function(req,res){
    const path = '/api/login';
    const requestOption = {
      url : apiOptions.server + path,
      method : 'GET',
      json : {},
      qs : {          
        email:req.body.email,
        password:req.body.password
    }
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
                console.log('ok')
                // res
                //     .render('student',{title:'Student | DasshBoard'});
            }
        }
      );
}
const Home = function(req,res){
    res
    .render('index',{title:'Home'});
};



module.exports = {
    Home,LoginReaOne,SignUpCreate
};
