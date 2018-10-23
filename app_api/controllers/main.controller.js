var mongoose = require('mongoose');
var user = mongoose.model('user');

module.exports.SignUpCreate = function(req,res){
    if (req.body.email &&
        req.body.password) {
        var userData = {
          email: req.body.email,
          password: req.body.password,
          subjectName:req.body.subjectName,
          facultyName:req.body.facultyName
        //   dept:req.body.dept,
        //   batch:req.body.batch,
        //   name:req.body.name,
        //   gender:req.body.gender,
        //   univroll:req.body.univroll,
        //   phone:req.body.phone
        }
        //use schema.create to insert data into the db
        user.create(userData, function (err, user) {
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                req.session.user = user;
                const data=user;
                res
                    .json(data);
                    return;
            }
        });
      }
}

module.exports.LoginReaOne = function(req,res){
    // user.authenticate(req.body.email, req.body.password, function (error, userUser) {
    //     if (error || !user) {
    //     //   var err = new Error('Wrong email or password.');
    //     //   err.status = 401;
    //     //   return next(err);
    //     console.log('error');
    //     } else {
    //       req.session.userId = user._id;
    //       const data = user._id;
    //       console.log(data);
    //         res
    //             .json(data);
    //             return;
    //     }
    //   });
    user.findOne({email:req.body.email
    },(err,user)=>{ 
        if(err){
        res
            .status(400)
            .json(err);
    }else{
        req.session.user = user;
        const data=user;
        res
            .json(data);
            return;
    }});
}

module.exports.StudentDetails = function(req,res){
    user.create({
        fname:req.body.fname,
        lname:req.body.lname,
        gender:req.body.gender,
        phone:req.body.phone,
        otherphone:req.body.otherphone,
        parendphone:req.body.parendphone,
        dept:req.body.dept,
        sid:req.body.sid
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
