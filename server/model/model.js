const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    author : {
        type: String,
        required: true,
    },
    genre : {
        type: String,
        required: true,
    },
    
    status : String,
})

const Bookdb = mongoose.model('Bookdb', schema);

module.exports = Bookdb;