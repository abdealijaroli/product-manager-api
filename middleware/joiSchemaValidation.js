const productSchema = require('../apiSchema/productSchema')

const validateObjectSchema = (data) => {
    const result = productSchema.createProductSchema.validate(data, { convert: false });
}
module.exports.validateBody = () => {
    return (req, res, next) => {
        validateObjectSchema(req.body);
    }
}