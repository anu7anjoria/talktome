
const Faculty = function(req,res){
    res
    .render('./faculty/faculty',{title:'Faculty'});
};

const AssignFinal = function(req,res){
    res
    .render('./faculty/assignfinal',{title:'Faculty - AssignFinal'});
};

const AssignToStudent = function(req,res){
    res
    .render('./faculty/assigntostudent',{title:'Faculty - AssignToStudent'});
};

const PostAnswer = function(req,res){
    res
    .render('./faculty/postanswer',{title:'Faculty - Answer'});
};

const Stats = function(req,res){
    res
    .render('./faculty/viewgraph',{title:'Faculty - Stats'});
};
module.exports = {
    Faculty,AssignFinal,AssignToStudent,PostAnswer,Stats
}