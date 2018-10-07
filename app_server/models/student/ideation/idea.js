const mongoose = require('mongoose');
const ideaSchema = new mongoose.Schema({
    ideaPost:{
        type:String
    },
});

mongoose.model('idea',ideaSchema);