const mongoose = require('mongoose');
const question = mongoose.model('question');
const Fac = mongoose.model('fac');
const feed = mongoose.model('feed');
const user = mongoose.model('user');
const facultySchema = mongoose.model('facultySignup');
const DisplayQues = function(req,res){
    const facultySchema_id = req.session.facultySchema;
    //facultynaam = facultynaam.email;
    user.find({
        facultyName:facultySchema_id.email,    
    },function(err,user){
        if(err) {
            console.log("There was a problem .");
        } else {
            for(var i=0 ; i<user.length ; i++){
                var newID = new Array();
                newID[i] = user[i]._id;
                question.findOne(
                    {sId:newID[i]},function(err,question){
                    if(err) {
                        console.log("There was a problem.");
                    } else {
                        //here
                    }
                }) 
            }
        }
    })

}
const postAnswertoo = function(req,res){
    question.create({
            title:req.body.titleanswer,
            body:req.body.postanswer
        },(err,Facquestion) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                .render('login',{title:'Login'});
            }
            
        }); 
}

const AssignPost = function(req,res){
    Fac.create({
        classDetail:[{
            dateOfClass:req.body.cdate,
            numberOfStudent:req.body.nos,
            place:req.body.venue,
        }],
        },(err,Fac) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                res
                .render('login',{title:'Login'});
            }
            
        }); 
}



const Faculty = function(req,res){
    res
    .render('./faculty/faculty',{title:'Faculty'});
};

const AssignFinal = function(req,res){
    res
    .render('./faculty/assignfinal',{title:'Faculty - AssignFinal'});
};

const AssignToStudent = function(req,res){
    res
    .render('./faculty/assigntostudent',{title:'Faculty - AssignToStudent'});
};

const PostAnswer = function(req,res){
    res
    .render('./faculty/postans',{title:'Faculty - Answer'});
};

const Stats = function(req,res){
    res
    .render('./faculty/viewgraph',{title:'Faculty - Stats'});
};

module.exports = {
    Faculty,AssignFinal,AssignToStudent,PostAnswer,Stats,
    postAnswertoo,AssignPost,DisplayQues

}