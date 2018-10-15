// var mongoose = require('mongoose');
// var user = mongoose.model('user');

const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = '';
}

module.exports.SignUpCreate = function(req,res){
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
                    .render('login',data);
            }
        }
      );
}
const Home = function(req,res){
    res
    .render('index',{title:'Home'});
};


module.exports = {
    Home
};
