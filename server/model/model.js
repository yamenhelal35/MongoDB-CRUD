const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
    },
    Age : {
        type: Number,
        required: true,
    },
    gender : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;

/*model*/