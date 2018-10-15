const mongoose = require('mongoose');
const assignTaskSchema = new mongoose.Schema({
    title:String,
    body:String,
    date: { type: Date, default: Date.now },

    endDate:{ type: Date, default: Date},

});
mongoose.model('coc',assignTaskSchema);