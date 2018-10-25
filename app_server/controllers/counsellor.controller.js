const mongoose = require('mongoose');
const Counsel = mongoose.model('counselling');
const nodemailer = require('nodemailer');
const DisplayCounsellor = function(req,res){
    Counsel.find({},function(err,Counsel){
                if(err) {
                    console.log("There was a problem .");
                } else {
                    res.render('./counsellor/counsellor',{data:Counsel})
                }
    })
}

const CounselReply = function(req,res){
    // nodemailer.createTestAccount((err, account) => {
    //     // create reusable transporter object using the default SMTP transport
    //     let transporter = nodemailer.createTransport({
    //         port: 587,
    //         secure: false, // true for 465, false for other ports
    //         service: 'gmail',
    //         auth: {
    //             user: 'edwardswift28@gmail.com', // generated ethereal user
    //             pass: 'analkumargta' // generated ethereal password
    //         }
    //     });
    
    //     // setup email data with unicode symbols
    //     let mailOptions = {
    //         from: 'anusanjoria@gmail.com', // sender address
    //         to:     'edwardswift28@gmail.com', // list of receivers
    //         subject: 'Hello ✔', // Subject line
    //         text: 'Hello world?', // plain text body
    //         html: '<b>Hello world?</b>' // html body
    //     };
    
    //     // send mail with defined transport object
    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             return console.log(error);
    //         }
    //         console.log('Message sent: %s', info.messageId);
    //         // Preview only available when sending through an Ethereal account
    //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    //         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    //         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    //     });
    // });
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