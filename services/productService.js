const Product = require('../db/models/productModel')

// can reuse. business logic. passing the req.body parameter from producController and it interacts with the database and saves it there
module.exports.createProduct = async(serviceData) => {
    try {
        const product = new Product({...serviceData });
        await product.save();
    } catch (error) {
        console.log('Error: Services: createProduct:', error);
        throw new Error(error);
    }
}