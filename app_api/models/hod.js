const mongoose = require('mongoose');
//Assigned task by Hod
const assignTaskSchema = new mongoose.Schema({
    title:String,
    body:String,
    date: { type: Date, default: Date.now },

    endDate:{ type: Date, default: Date},

});
const nameSchema = new mongoose.Schema({
    Student:String,Faculty:String,Moderator:String,
    Counsellor:String,COC:String

});
const assignToSchema = new mongoose.Schema({
    assignTo:[nameSchema]
});

const hodSchema = new mongoose.Schema({
    hid:{
        type:Number,
    },
    detail_of_task:[assignTaskSchema],
    assign_to:[assignToSchema]

});

mongoose.model('hod',hodSchema);