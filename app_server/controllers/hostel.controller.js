const HostelIncharge = function(req,res){
    res
    .render('./hostel_incharge/hostelincharge',{title:'Hostel Incharge'});
};
const MarkComplete = function(req,res){
    res
    .render('./hostel_incharge/markcomplete',{title:'Hostel Incharge - Mark Complete'});
};
const ViewProblem = function(req,res){
    res
    .render('./hostel_incharge/viewproblem',{title:'Hostel Incharge - View Problem'});
};
module.exports = {
    HostelIncharge,MarkComplete,ViewProblem
}