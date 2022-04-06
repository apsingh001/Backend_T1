const mongoose = require('mongoose');

const Users=mongoose.model('Users',{
    taskName:String,
    taskDescription:String,
    startTime:String,
    endTime:String
});

module.exports = Users;