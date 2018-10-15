const mongoose = require('mongoose');
const Moderator = mongoose.model('moderator');
const sendJsonResponse = function(res, status, content) { 
    res.status(status); 
    res.json(content);
};
module.exports.ReplyCreate = function(req,res){
    Moderator.create({
        Reply:[{
            title:req.body.title,
            body:req.body.body,
        }]
        }, function(err, Moderator) { 
        if (err) {
        sendJsonResponse(res, 400, err);
        } else {
        sendJsonResponse(res, 201, Moderator);
        }
        }); 
};