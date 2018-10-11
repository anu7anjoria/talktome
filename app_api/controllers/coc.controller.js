//buisness logic

//end buisness logic

//rendering view
const Coc = function(req,res){
    res
    .render('./coc/coc',{title:'COC'});
};

const AssignTask = function(req,res){
    res
    .render('./coc/assigntask',{title:'COC- AssignTask'});
};

const FacultyDetail = function(req,res){
    res
    .render('./coc/facultydetails',{title:'COC - FacultyDetail'});
};

const MyTask = function(req,res){
    res
    .render('./coc/mytask',{title:'COC- My Task'});
};

const OpenForum = function(req,res){
    res
    .render('./coc/openforum',{title:'COC - OpenForum'});
};
//end rendering view
module.exports = {
    Coc,AssignTask,FacultyDetail,MyTask,OpenForum
};