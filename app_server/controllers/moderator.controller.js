const mongoose = require('mongoose');
const Idea = mongoose.model('idea');
const IdeaReply = mongoose.model('IdeaReply');
const DisplayIdea = function(req,res){
    Idea.find(
        {},function(err,Idea){
        if(err) {
            console.log("There was a problem finding the ticket.");
        } else {
            res.render('./moderator/newlysubmitted',{ data:Idea })       
         }
    })   
}
const ReolyToStudent = function(req,res){
    IdeaReply.create({
        sid:req.body.email,
        status:req.body.status,
        description:req.body.rtext
    },(err,questionAns) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
            res.redirect('/moderator/response');
        }
    })
}
const Moderator = function(req,res){
    res
    .render('./moderator/moderator',{title:'Moderator'});
};

const MostUpvoted = function(req,res){
    res
    .render('./moderator/mostupvoted_forward',{title:'Moderator - Most UpVoted'});
};

const MostRecent = function(req,res){
    res
    .render('./moderator/newlysubmitted',{title:'Moderator - Recent'});
};
const MostRecentReject = function(req,res){
    res
    .render('./moderator/newlysubmitted_reject',{title:'Moderator - Recent - Reject'});
};
const MostRecentApprove = function(req,res){
    res
    .render('./moderator/newlysubmitted_approve',{title:'Moderator - Recent - Approve'});
};
const Response = function(req,res){
    res
    .render('./moderator/response',{title:'Moderator - Response'});
};
module.exports = {
    Moderator,MostRecent,MostRecentApprove,MostRecentReject,MostUpvoted,Response,DisplayIdea,ReolyToStudent
}