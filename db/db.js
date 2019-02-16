const mongoose = require("mongoose");
const logger = require('../config/logger');

const DB_USER = process.env.DB_USER || "Nexus586";
const DB_NAME = process.env.DB_NAME || "randomize";
const DB_PASSWORD = process.env.DB_PASSWORD || "NeznW5xV9iYLdud" ;
const DB_HOST = process.env.DB_HOST || "ds127115.mlab.com:27115";

mongoose.Promise = global.Promise;

const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(DB_URL, {useNewUrlParser: true})
.then(() => {
    logger.info("Successfully connected to db");
})
.catch((err) => {
    logger.error("Unable to connect to database");
});

module.exports = mongoose;