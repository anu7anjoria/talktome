const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

mongoose.model('user',userSchema);