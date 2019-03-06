const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Framework = require('../models/framework');
const Database = require('../models/databases');
const logger = require('../config/logger');
const FrameworkHistory = require('../models/frameworkHistory');

// let lastFrameworksUsed = getLastFrameworkDetails();

router.post('/randomize', (req, res) => {

});

// function randomizeFrameworks(frameworkArray, platform) {
//     // let length = frameworkArray.length;
//     // let frameworks = Framework.find({"platform": platform}).toArray();
// }

// function randomizeBackend() {
//     let bList = [];
//     Framework.find().then((doc) => {
//         doc.forEach((item) => {
//             if(item.name !== lastFrameworksUsed.server_side_framework.name) {
//                 bList.push(item.name);
//             }
//             return bList[Math.floor((Math.random()*10)/bList.length)];
//         });
//     }).catch((err) => {
//         logger.error(err);
//     });
// }

// function randomizeDatabases() {
//     let dList = [];
//     Database.find().then((doc) => {
//         doc.forEach((item) => {
//             if(lastFrameworksUsed.database_used !== null ) {
//                 if(item.name !== lastFrameworksUsed.database_used.name) {
//                     dList.push(item.name);
//                 }
//             }else {
//                 dList.push(item.name);
//             }
//         });
//         return dList[Math.floor((Math.random()*10)/dList.length)];
//     }).catch((err) => {
//         logger.error(err);
//     });
// }

// function getLastFrameworkDetails() {
//     return FrameworkHistory.find().sort({"_id": -1}).limit(1);
// }

module.exports = router;