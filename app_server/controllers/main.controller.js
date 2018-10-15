const Home = function(req,res){
    res
    .render('index',{title:'Home'});
};


module.exports = {
    Home
};
