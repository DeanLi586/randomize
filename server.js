require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db/db");
const logger = require("./config/logger");
const frameworkRoutes = require('./routes/frameworkRoutes');
// const swagger = require("swagger-ui-express");
// const swaggerDocs = require("./swagger.json");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
// app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));


app.use(frameworkRoutes);

app.listen(PORT, () => {
    logger.info(`Server running on PORT=${PORT}`);
});