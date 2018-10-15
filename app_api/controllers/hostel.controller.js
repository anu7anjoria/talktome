const mongoose = require('mongoose');
const Feed = mongoose.model('feed');

const sendJsonResponse = function(res, status, content) { 
    res.status(status); 
    res.json(content);
};

module.exports.HostelProblemReadAll = function(req,res){
    Feed
    .find({})
    // .select('name reviews') 
    .exec(function(err, Feed) {
    if (!Feed) { 
    sendJsonResponse(res, 404, { 
    "message": "ideaId not found" 
    }); 
    return;
    } else if (err) { 
    sendJsonResponse(res, 404, err); 
    return; 
    }
    sendJsonResponse(res, 200, Feed); 
    });
    
}