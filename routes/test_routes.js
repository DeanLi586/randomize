const framework = require('../models/framework');
const express = require('express');
const router = express.Router();
const Frameworks = require('../utils/seed');
const logger = require('../config/logger');


router.post('/seed', (req, res) => {

    try {
        Frameworks.forEach((element) => {
            let newFramework = new framework(element);
            newFramework
            .save()
            .then(() => {
                logger.info(`${newFramework.name}  has been saved`);
            })
            .catch((err) => {
                logger.error(err);
            });
        });
        res.status(201).send("Saved successfully");   
    } catch (err) {
        logger.error(err);
        res.status(409).send("Data has already been seeded");        
    }

});


module.exports = router;