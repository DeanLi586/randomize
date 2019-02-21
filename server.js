require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db/db");
const logger = require("./config/logger");
const testRoutes = require('./routes/test_routes');
// const swagger = require("swagger-ui-express");
// const swaggerDocs = require("./swagger.json");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: false
}));
// app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));

app.use(testRoutes);

app.listen(PORT, () => {
    logger.info(`Server running on PORT=${PORT}`);
});