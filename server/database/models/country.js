const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
<<<<<<< HEAD
=======

>>>>>>> f56e67360bfe706ff4ea59cd136d51ffad86b8b2
    code: {
        type: String
    },
    num: {
        type: Number
    },
    lat: {
        type: Number
    },
    lon: {
        type: Number
    },
},
    { timestamps: true })


let country = mongoose.model('country', countrySchema);

module.exports = country