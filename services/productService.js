const Product = require('../db/models/productModel')

// can reuse. business logic. passing the req.body parameter from producController and interacts with the database and saves it there
module.exports.createProduct = async(serviceData) => {
    try {
        let product = new Product({...serviceData });
        let result = await product.save();
        return result.toObject();
    } catch (error) {
        console.log('Error: Services: createProduct:', error);
        throw new Error(error);
    }
}