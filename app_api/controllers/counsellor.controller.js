//Buisness Logi

//End



//Start Rendering

const Counsellor = function(req,res){
    res
    .render('./counsellor/counsellor',{title:'Counsellor'});
};

const GiveAppointment = function(req,res){
    res
    .render('./counsellor/giveappointment',{title:'Counsellor - Give Appointment'});
};

const PostArticle = function(req,res){
    res
    .render('./counsellor/postarticle',{title:'Counsellor - Post Article'});
};

const ViewProblem = function(req,res){
    res
    .render('./counsellor/viewproblem',{title:'Counsellor - ViewProblem'});
};

const WriteBack = function(req,res){
    res
    .render('./counsellor/writeback',{title:'Counsellor - WriteBack'});
};
//End Rendering

module.exports = {
    Counsellor,WriteBack,ViewProblem,PostArticle,GiveAppointment
}