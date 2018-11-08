const mongoose = require('mongoose');
const question = mongoose.model('question');
const feed = mongoose.model('feed');
const user = mongoose.model('user');
const facultySchema = mongoose.model('facultySignup');
const questionAns = mongoose.model('questionAns');
const StudentList = mongoose.model('stuList');
const request = require('request');
const apiOptions = {
    server : 'http://localhost:3000'
  };
  if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'http://talktomechitkara.herokuapp.com';
  }
// const pushStore = function(a){
//     store1.push(a);
// }
// pushStore(question);
var flag = false;
var store=[];
const DisplayQues = function(req,res){
    const facultySchema_id = req.session.user;
    //facultynaam = facultynaam.email;
    user.find({
        facultyName:facultySchema_id.email,  
    },function(err,user){
        if(err) {
            console.log("There was a problem .");
        } else {
            // for(var i=0 ; i<user.length ; i++){
            //     var newID = new Array();
            //     newID[i] = user[i]._id;
            //     question.findOne(
            //         {sId:newID[i]},function(err,question){
            //         if(err) {
            //             console.log("There was a problem.");
            //         } else {
            //             res.render('./faculty/dispquestion',{data:store});

            //             //console.log(question);
            //             //store1.question.push(question);
            //             //res.render('./faculty/dispquestion');
            //             //store.push(question);
            //         }
            //     }) 
            // }
            // console.log(store);
            //res.render('./faculty/dispquestion',{data:store});
            var newID = new Array();
                newID[0]    = user[0]._id;
                question.findOne(
                    {sId:newID[0]},function(err,question){
                    if(err) {
                        console.log("There was a problem.");
                    } else {
                            //console.log(question);
                        res.render('./faculty/dispquestion',{data:question});

                        //console.log(question);
                        //store1.question.push(question);
                        //res.render('./faculty/dispquestion');
                        //store.push(question);
                    }
                }) 
        }  
    })
    //console.log(store1);
}
const postAnswertoo = function(req,res){
    const path = '/api/faculty/postanswer';
    // const user_id = req.session.facultySchema;
    // console.log(user_id);
    const requestOption = {
      url : apiOptions.server + path,
      method : 'POST',
      json : {
        title:req.body.titlea,
        body:req.body.postanswer,
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
                console.log(data);
            }
        }
      );
}

const addStudent = function(req,res){
    const fac_id = req.session.user;
    fac_id == fac_id.email;
    StudentList.create({
        teacherid:fac_id,
        studentid:req.body.addstu
    }, (err,StudentList) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
            res.redirect('/faculty/studentList');
        }
    })
}

const SendDataToStudent = function(req,res){
    questionAns.create({
        sId:req.body.stu,
        title:req.body.titlea,
        description:req.body.postanswer
    },(err,questionAns) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
            res.redirect('/faculty/postanswer');
        }
    })
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
    postAnswertoo,AssignPost,DisplayQues,addStudent,SendDataToStudent

}