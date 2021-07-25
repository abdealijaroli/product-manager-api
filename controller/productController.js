const productService = require('../services/productService')
    // shouldn't reuse. handler to the router middleware (producRoutes), has access to the req res object.
module.exports.createProduct = async(req, res) => {
    let response = {};
    try {
        // creates the product and saves it to the database
        let responseFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = 'Product created successfully';
        response.body = responseFromService;
    } catch (error) {
        console.log('Error: Controller: createProduct:', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    return res.status(response.status).send(response)
}