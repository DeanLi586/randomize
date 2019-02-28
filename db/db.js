const mongoose = require("mongoose");
const logger = require('../config/logger');
const Frameworks = require('../utils/seed').Frameworks;
const Databases = require('../utils/seed').Databases;
const database = require('../models/databases');
const framework = require('../models/framework');



const DB_USER = process.env.DB_USER || "Nexus586";
const DB_NAME = process.env.DB_NAME || "randomize";
const DB_PASSWORD = process.env.DB_PASSWORD || "NeznW5xV9iYLdud";
const DB_HOST = process.env.DB_HOST || "ds127115.mlab.com:27115";

mongoose.Promise = global.Promise;

const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => {
        mongoose.connection.db.collection("frameworks").countDocuments((err, count) => {
            if (err) {
                logger.error(`An error occurred: ${err}`);
            }

            if (count === 0) {
                Frameworks.forEach((elememt) => {
                    let newFramework = new framework(elememt);
                    newFramework.save()
                        .then(() => {
                            logger.info(`framework with name: ${newFramework.name} has been saved`);
                        })
                        .catch((err) => {
                            logger.error(err);
                        });
                });
            } else {
                logger.info(`number of items in the collection: ${count}`);
            }
        });

        mongoose.connection.db.collection('databases').countDocuments((err, count) => {
            if (err) {
                logger.error(`An error occurred: ${err}`);
            }

            if (count == 0) {
                Databases.forEach((element) => {
                    let newDatabase = new database(element);
                    newDatabase.save()
                        .then(() => {
                            logger.info(`database with name: ${newDatabase.name} has been saved`);
                        })
                        .catch((err) => {
                            logger.error(err);
                        });
                });
            } else {
                logger.info(`number of items in the collection: ${count}`);
            }
        });
    })
    .catch((err) => {
        logger.error(err);
    });
    
module.exports = mongoose;