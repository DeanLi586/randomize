const express = require('express');
const router = express.Router();
const frameworks = require('../models/framework');
const database = require('../models/databases');
const logger = require('../config/logger');

// route to add new framework
router.post('/addFramework', (req, res) => {

    // check if the request body is not empty
    if (!req.body) {
        res.status(404).send('Request body not found');
    }

    // request body is not empty, create new framework object and try to save it
    let newFramework = new frameworks(req.body);
    newFramework.save()
        .then((doc) => {
            // framework has been saved, logging and returning response to client
            logger.info(`Framework with name: ${newFramework.name} has been saved`);
            res.status(201).json(doc);
        })
        .catch((err) => {
            // an error occurred, logging error and returning response
            logger.error(err);
            res.status(500).send(err);
        });
});


// route to add new database 
router.post('/addDatabase', (req, res) => {

    // check if the request body is not empty
    if (!req.body) {
        res.status(404).send('Request body not found');
    }

    // request body is not empty, create new database object and try to save it
    let newDatabase = new database(req.body);
    newDatabase.save()
        .then((doc) => {
            // database has been saved, logging and returning response to the client
            logger.info(`Database with name: ${newDatabase.name} has been saved`);
            res.status(201).json(doc);
        })
        .catch((err) => {
            // an error occurred, logging error and returning response
            logger.error(err);
            res.status(500).send(err);
        });
});

// route to remove database
router.delete('/deleteDatabase', (req, res) => {

    // check if the database name param is missing
    if (!req.query.name) {
        res.status(404).send('Database name is missing');
    }

    // try to find and delete database
    database.findOneAndDelete({
            name: req.query.name
        })
        .then(() => {
            // database deleted successfully, logging and returning response
            logger.info(`database with name: ${req.query.name} has been removed`);
            res.status(201).json({
                message: 'database deleted successfully'
            });
        })
        .catch((err) => {
            // unable to delete database, logging and returning response
            logger.info(`database with name: ${req.query.name} has been removed`);
            res.status(500).json({
                message: err
            });
        });
});

// route to remove framework
router.delete('/deleteFramework', (req, res) => {

    // check if the framework name param is missing
    if (!req.query.name) {
        res.status(404).send('Database name is missing');
    }

    // try to find and delete framework
    frameworks.findOneAndDelete({
            name: req.query.name
        })
        .then(() => {
            // framework deleted successfully, logging and returning response
            logger.info(`framework with name: ${req.query.name} has been removed`);
            res.status(201).json({
                message: 'database deleted successfully'
            });
        })
        .catch((err) => {
            // unable to delete framework, logging and returning response
            logger.info(`framework with name: ${req.query.name} has been removed`);
            res.status(500).json({
                message: err
            });
        });
});

module.exports = router;