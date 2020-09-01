const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    Id: {
        type: Number
    },
    City: {
        type: String
    },
    Country: {
        type: String
    },
    Message: {
        type: Array
    }
},
    { timestamps: true })

let user = mongoose.model('user', userSchema);

module.exports = user