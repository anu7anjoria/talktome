const mongoose = require('mongoose');
const Hod = mongoose.model('hod');
const sendJsonResponse = function(res, status, content) { 
    res.status(status); 
    res.json(content);
};

module.exports.AssignTaskCreate = function (req, res) {
    Hod.create({
        detail_of_task:[{
            title:req.body.title,
            body:req.body.body,
            endDate:req.body.endDate
        }]
        }, function(err, Hod) { 
        if (err) {
        sendJsonResponse(res, 400, err);
        } else {
        sendJsonResponse(res, 201, Hod);
        }
        }); 
   }; 

