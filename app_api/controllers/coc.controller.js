const mongoose = require('mongoose');
const Coc = mongoose.model('coc');

const sendJsonResponse = function(res, status, content) { 
    res.status(status); 
    res.json(content);
};

module.exports.AssignTaskCreate = function(req,res){
    Coc.create({
        give_Appointment:[{
            Student:req.body.Student,
            title:req.res.title,
            body:req.res.body,
            apdate:req.body.apdate
        }]
        }, function(err, Coc) { 
        if (err) {
        sendJsonResponse(res, 400, err);
        } else {
        sendJsonResponse(res, 201, Coc);
        }
        }); 
    }
    


