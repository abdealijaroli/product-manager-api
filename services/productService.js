const Product = require('../db/models/productModel')

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

module.exports.getAllProducts = async(serviceData) => {
    try {
        let products = await Product.find({});
        return products;
    } catch (error) {
        console.log('Error: Services: getAllProducts:', error);
        throw new Error(error);
    }
}