const mongoose = require('mongoose');
const Counsel = mongoose.model('counselling');
const nodemailer = require('nodemailer');
const DisplayCounsellor = function(req,res){
    Counsel.find({},function(err,Counsel){
                if(err) {
                    console.log("There was a problem .");
                } else {
                    //here will be loop user
                    res.render('./counsellor/dispcounsel',{data:Counsel})
                }
    })
}

const CounselReply = function(req,res){
    var outputText = req.body.etext;
    var recieverEmail = req.body.email;
    var user_id = req.session.user;
    var transporter = nodemailer.createTransport({
        host: 'mail.google.com',
        port: 587,
        secure: false, // true for 465, false for other ports
     
        service: 'gmail',
        auth: {
            user: user_id.email, // generated ethereal user
            pass: user_id.password  // generated ethereal password
           },
    
        tls:{
          rejectUnauthorized:false
        }
       });

       let mailOptions = {
        from: '"edwardswift28" <edwardswift28@gmail.com>', // sender address
        to: recieverEmail, // list of receivers
        subject: 'Counselling Info', // Subject line
        text: outputText, // plain text body
        html: outputText // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }else{
            res.redirect('/counsellor/writeback');
        }
    });
}

const Counsellor = function(req,res){
    res
    .render('./counsellor/counsellor',{title:'Counsellor'});
};

const GiveAppointment = function(req,res){
    res
    .render('./counsellor/giveappointment',{title:'Counsellor - Give Appointment'});
};

const PostArticle = function(req,res){
    res
    .render('./counsellor/postarticle',{title:'Counsellor - Post Article'});
};

const ViewProblem = function(req,res){
    res
    .render('./counsellor/viewproblem',{title:'Counsellor - ViewProblem'});
};

const WriteBack = function(req,res){
    res
    .render('./counsellor/writeback',{title:'Counsellor - WriteBack'});
};
//End Rendering

module.exports = {
    Counsellor,WriteBack,ViewProblem,PostArticle,GiveAppointment,DisplayCounsellor,CounselReply
}