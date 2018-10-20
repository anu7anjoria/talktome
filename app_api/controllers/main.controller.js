var mongoose = require('mongoose');
var user = mongoose.model('user');
const sendJsonResponse = function(res, status, content) { 
    res.status(status); 
    res.json(content);
};
module.exports.SignUpCreate = function(req,res){
    user.create({
        email  : req.body.email,
        password : req.body.password
        },(err,user) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                const data={user};
                res
                    .json(data);
                    return;
            }
            
        }); 
}

module.exports.LoginReaOne = function(req,res){
    user.findOne({email:req.body.email
    },(err,user)=>{ 
        if(err){
        res
            .status(400)
            .json(err);
    }else{
        const data={user};
        res
            .json(data);
            return;
    }});

}


