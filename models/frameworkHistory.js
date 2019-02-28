const mongoose = require('mongoose');
const framework = require('./framework');
const database = require('./databases');

const FrameworkHistory = new mongoose.Schema({
    client_side_framework: {
        type: framework,
        required: true
    },
    server_side_framework: {
        type: framework,
        required: true
    },
    database_used: {
        type: database,
        required: true
    }
});

module.exports = mongoose.model('FrameworkHistory', FrameworkHistory);