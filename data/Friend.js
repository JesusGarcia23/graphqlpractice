const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    language: {
        type: String
    },
    email: {
        type: String
    },
    contacts: {
        type: Array
    },
})

const Friend = mongoose.model('Friend', friendSchema)

module.exports = Friend