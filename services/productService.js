const Product = require('../db/models/productModel')
const { formatMongoData } = require('../helper/dbHelper')

module.exports.createProduct = async(serviceData) => {
    try {
        let product = new Product({...serviceData });
        let result = await product.save();
        return formatMongoData(result);
    } catch (error) {
        console.log('Error: Services: createProduct:', error);
        throw new Error(error);
    }
}

module.exports.getAllProducts = async(serviceData) => {
    try {
        let products = await Product.find({});
        return formatMongoData(products);
    } catch (error) {
        console.log('Error: Services: getAllProducts:', error);
        throw new Error(error);
    }
}