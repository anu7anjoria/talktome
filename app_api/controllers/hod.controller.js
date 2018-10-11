const Hod = function(req,res){
    res
    .render('./hod/hod',{title:'HOD'});
};
const AssignTask = function(req,res){
    res
    .render('./hod/assigntask',{title:'HOD - AssignTask'});
};
const Subjects = function(req,res){
    res
    .render('./hod/subjects',{title:'HOD - Subjects'});
};

module.exports = {
    Hod,AssignTask,Subjects
}