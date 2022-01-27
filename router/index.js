const router = require("express").Router();
const products = require("./products");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// route for swagger api doc
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

//Middleware for all /product routes
router.use('/product', products);

module.exports = router;