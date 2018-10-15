const mongoose = require('mongoose');
const Counsellor = mongoose.model('counsellor');
const Counsel = mongoose.model('counselling');

const sendJsonResponse = function(res, status, content) { 
    res.status(status); 
    res.json(content);
};
//POST===========================================
module.exports.PostArticleCreate = function(req,res){
    Counsellor.create({
        post_article:[{
            title:req.body.title,
            body:req.body.body,
        }]
        }, function(err, Counsellor) { 
        if (err) {
        sendJsonResponse(res, 400, err);
        } else {
        sendJsonResponse(res, 201, Counsellor);
        }
        }); 
};

module.exports.ReplyCreate = function(req,res){
    Counsellor.create({
        Reply:[{
            title:req.body.title,
            body:req.body.body,
        }]
        }, function(err, Counsellor) { 
        if (err) {
        sendJsonResponse(res, 400, err);
        } else {
        sendJsonResponse(res, 201, Counsellor);
        }
        }); 
};
module.exports.GiveAppointmentCreate = function(req,res){
Counsellor.create({
    give_Appointment:[{
        Student:req.body.Student,
        title:req.res.title,
        body:req.res.body,
        apdate:req.body.apdate
    }]
    }, function(err, Counsellor) { 
    if (err) {
    sendJsonResponse(res, 400, err);
    } else {
    sendJsonResponse(res, 201, Counsellor);
    }
    }); 
}


//READALL========================================
module.exports.ProblemReadAll = function(req,res){
        Counsel
        .find({})
        // .select('name reviews') 
        .exec(function(err, Counsel) {
        if (!Counsel) { 
        sendJsonResponse(res, 404, { 
        "message": "ideaId not found" 
        }); 
        return;
        } else if (err) { 
        sendJsonResponse(res, 404, err); 
        return; 
        }
        sendJsonResponse(res, 200, Counsel); 
        });
        
}

//GET============================================

module.exports.ProblemReadOne = function(req,res){
    if (req.params && req.params.issueId) { 
        Counsel
        .findById(req.params.issueId)
        // .select('name reviews') 
        .exec(function(err, Counsel) {
        if (!Counsel) { 
        sendJsonResponse(res, 404, { 
        "message": "ideaId not found" 
        }); 
        return;
        } else if (err) { 
        sendJsonResponse(res, 404, err); 
        return; 
        }
        sendJsonResponse(res, 200, Counsel); 
        });
        } else { 
        sendJsonResponse(res, 404, { 
        "message": "No ideaId in request" 
        }); 
        } 
}

module.exports.AppointReadOne = function(req,res){
    if (req.params && req.params.appointId) { 
        Counsellor
        .findById(req.params.appointId)
        // .select('name reviews') 
        .exec(function(err, Counsellor) {
        if (!Counsel) { 
        sendJsonResponse(res, 404, { 
        "message": "ideaId not found" 
        }); 
        return;
        } else if (err) { 
        sendJsonResponse(res, 404, err); 
        return; 
        }
        sendJsonResponse(res, 200, Counsellor); 
        });
        } else { 
        sendJsonResponse(res, 404, { 
        "message": "No ideaId in request" 
        }); 
        } 
}

module.exports.PostArticleReadOne = function(req,res){
    if (req.params && req.params.articleId) { 
        Counsellor
        .findById(req.params.articleId)
        // .select('name reviews') 
        .exec(function(err, Counsellor) {
        if (!Counsel) { 
        sendJsonResponse(res, 404, { 
        "message": "ideaId not found" 
        }); 
        return;
        } else if (err) { 
        sendJsonResponse(res, 404, err); 
        return; 
        }
        sendJsonResponse(res, 200, Counsellor); 
        });
        } else { 
        sendJsonResponse(res, 404, { 
        "message": "No ideaId in request" 
        }); 
        } 
}