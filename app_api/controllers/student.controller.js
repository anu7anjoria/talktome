const mongoose = require('mongoose');
const Idea = mongoose.model('idea');
const Feed = mongoose.model('feed');
const Counsel = mongoose.model('counselling');
const user = mongoose.model('user');
const sendJsonResponse = function(res, status, content) { 
    res.status(status); 
    res.json(content);
};

//IDEA=================================================================================================IDEA
module.exports.CreateIdea = function (req, res) {
    Idea.create({
        ideaId:req.body.ideaId,
        description:req.body.description,
        upvotes:req.body.upvotes
        }, (err,Idea) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                const data={Idea};
                res
                    .json(data);
                    return;
            }
            
        }); 
   }; 

module.exports.IdeaReadOne = function(req,res){
    if (req.params && req.params.ideaId) { 
        Idea
        .findById(req.params.ideaId)
        // .select('name reviews') 
        .exec(function(err, Idea) {
        if (!Idea) { 
        sendJsonResponse(res, 404, { 
        "message": "ideaId not found" 
        }); 
        return;
        } else if (err) { 
        sendJsonResponse(res, 404, err); 
        return; 
        }
        sendJsonResponse(res, 200, Idea); 
        });
        } else { 
        sendJsonResponse(res, 404, { 
        "message": "No ideaId in request" 
        }); 
        } 
};

//FEEDBACK==========================================================================================FEEDBACK

module.exports.CreateFeedback = function(req,res){
    Feed.create({
        subjectid:'CSL4201',
        topics:req.body.topics,
        status:req.body.status,
        },(err,Feed) =>{
            if(err){
                res
                    .status(400)
                    .json(err);
            }else{
                const data={Feed};
                res
                    .json(data);
                    return;
            }
            
        });
};

module.exports.FeedbackReadOne = function(req,res){
    if (req.params && req.params.feedId) { 
        Feed
        .findById(req.params.feedId)
        // .select('name reviews') 
        .exec(function(err,Feed) {
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
        } else { 
        sendJsonResponse(res, 404, { 
        "message": "No counselId in request" 
        }); 
        } 
};

//COUNSELLING======================================================================================COUNSELLING

module.exports.CreateCounselling = function(req,res){
    Counsel.create({
        title:req.body.title,
        body:req.body.body,
        counselId:234
        }, function(err, Counsel) { 
        if (err) {
        sendJsonResponse(res, 400, err);
        } else {
        sendJsonResponse(res, 201, Counsel);
        }
    });
};

module.exports.CounsellingReadOne = function(req,res){
    if (req.params && req.params.counselId) { 
        Counsel
        .findById(req.params.counselId)
        // .select('name reviews') 
        .exec(function(err,Counsel) {
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
        "message": "No counselId in request" 
        }); 
        } 
};
module.exports.DisplayUser = function(req,res){
    user.findOne({
        email:'ads@gmail.com'    
    }),(err,user) =>{
        if(err){
            res
                .status(400)
                .json(err);
        }else{
            console.log('User Found');
            res
                .status(200)
                .redirect('/student/ideation',{data:user});
        }
        
    }
}