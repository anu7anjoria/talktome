const mongoose = require('mongoose');
const Faculty = mongoose.model('fac');
                  
const sendJsonResponse = function(res, status, content) { 
  res.status(status); 
  res.json(content);
};

module.exports.PostAnswerCreate = function(req,res){
    Faculty.create({
        post_answer:[{
            title:req.res.title,
            body:req.body.body,
            date:req.body.date
        }]
        }, function(err, Faculty) { 
        if (err) {
        sendJsonResponse(res, 400, err);
        } else {
        sendJsonResponse(res, 201, Faculty);
        }
        }); 
}


module.exports.PostAnswerReadOne = function(req,res){
    if (req.params && req.params.postId) { 
        Faculty
        .findById(req.params.postId)
        // .select('name reviews') 
        .exec(function(err, Faculty) {
        if (!Faculty) { 
        sendJsonResponse(res, 404, { 
        "message": "ideaId not found" 
        }); 
        return;
        } else if (err) { 
        sendJsonResponse(res, 404, err); 
        return; 
        }
        sendJsonResponse(res, 200, Faculty); 
        });
        } else { 
        sendJsonResponse(res, 404, { 
        "message": "No ideaId in request" 
        }); 
        } 
};

// module.exports.PostAnswerUpdate = function(req,res){
//     if (!req.params.postId) {
//         res
//           .status(404)
//           .json({
//             "message": "Not found, locationid is required"
//           });
//         return;
//       }
//       Faculty
//         .findById(req.params.postId)
//         .select('-reviews -rating')
//         .exec((err, Faculty) => {
//           if (!Faculty) {
//             res
//               .json(404)
//               .status({
//                 "message": "locationid not found"
//               });
//             return;
//           } else if (err) {
//             res
//               .status(400)
//               .json(err);
//             return;
//           }
//           Faculty.post_answer:[{
//             title:req.res.title,
//             body:req.body.body,
//             date:req.body.date
//         }]
//           Faculty.save((err, Faculty) => {
//             if (err) {
//               res
//                 .status(404)
//                 .json(err);
//             } else {
//               res
//                 .status(200)
//                 .json(Faculty);
//             }
//           });
//         }
//       );
// };