const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../api_schema/productSchema')
const tokenValidation = require('../middleware/tokenValidation');

// default route: /api/v1/product
router.post('/',
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(productSchema.createProductSchema),
    productController.createProduct
);

router.get('/:id',
    tokenValidation.validateToken,
    productController.getProductById
);

router.put('/:id',
    tokenValidation.validateToken,
    joiSchemaValidation.validateUpdateProductSchema(productSchema.updateProductSchema),
    productController.updateProduct
)

router.get('/',
    tokenValidation.validateToken,
    joiSchemaValidation.validateQueryParams(productSchema.getAllProducts),
    productController.getAllProducts
);

router.delete('/:id',
    tokenValidation.validateToken,
    productController.deleteProduct
)

module.exports = router;