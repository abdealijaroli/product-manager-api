const productService = require('../services/productService')
const constants = require('../constants/index')

module.exports.createProduct = async(req, res) => {
    let response = {...constants.defaultServerResponse };
    try {
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

module.exports.getAllProducts = async(req, res) => {
    let response = {...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.getAllProducts(req.query);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Error: Controller: getAllProducts:', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getProductById = async(req, res) => {
    let response = {...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.getProductById(req.params);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Error: Controller: getProductById:', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.updateProduct = async(req, res) => {
    let response = {...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.updateProduct({
            id: req.params.id,
            updateInfo: req.body
        });
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_UPDATED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Error: Controller: updateProduct:', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.deleteProduct = async(req, res) => {
    let response = {...constants.defaultServerResponse };
    try {
        const responseFromService = await productService.deleteProduct(req.params);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_DELETED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Error: Controller: deleteProduct:', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}