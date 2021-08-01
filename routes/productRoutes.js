const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../api_schema/productSchema')

// default route: /api/v1/product
router.post('/',
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct
);

router.get('/:id',
    productController.getProductById
);

router.get('/',
    joiSchemaValidation.validateQueryParams(productSchema.getAllProducts),
    productController.getAllProducts
);

module.exports = router;