const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name :{
        type : String,
        reqired : true
    },
    age :{
        type : Number,
        reqired : true
    },
    gender :{
        type : String,
        reqired : true
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;