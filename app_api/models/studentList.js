const mongoose = require('mongoose');

const stuList = new mongoose.Schema({
    teacherid:String,
    studentid:String
})

var StudentList = mongoose.model('stuList', stuList);
module.exports = StudentList;