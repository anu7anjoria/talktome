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
    Moderator,MostRecent,MostRecentApprove,MostRecentReject,MostUpvoted,Response
}