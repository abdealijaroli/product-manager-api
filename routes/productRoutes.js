const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema')

// default route: /api/v1/product
router.post('/',
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct
);

module.exports = router;