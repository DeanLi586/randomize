require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db/db");
const logger = require("./config/logger");

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: false}));



app.listen(PORT, () => {
    logger.info(`Server running on PORT=${PORT}`);
});