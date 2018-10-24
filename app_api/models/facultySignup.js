const mongoose = require('mongoose');
const facultySchema = new mongoose.Schema({
    email:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
});

var facultySignup = mongoose.model('facultySignup', facultySchema);
module.exports = facultySignup;