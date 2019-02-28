const mongoose = require('mongoose');

const Databases = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Databases', Databases);