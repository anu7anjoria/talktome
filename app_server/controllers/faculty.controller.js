const mongoose = require('mongoose');
const question = mongoose.model('question');
const Fac = mongoose.model('fac');

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
    postAnswertoo,AssignPost

}