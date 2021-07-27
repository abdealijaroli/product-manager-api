const productService = require('../services/productService')
const constants = require('../constants')

// shouldn't reuse. sends data to productService, returns response, has access to the req res object.
module.exports.createProduct = async(req, res) => {
    let response = {...constants.defaultServerResponse };
    try {
        // creates the product and saves it to the database
        const responseFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Error: Controller: createProduct:', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}