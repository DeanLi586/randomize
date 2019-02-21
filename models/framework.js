const mongoose = require("mongoose");

const framework = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    platform: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('framework', framework);