const productSchema = require('../api_schema/productSchema')
const constants = require('../constants/index')

const validateObjectSchema = (data) => {
    const result = productSchema.createProductSchema.validate(data, { convert: false });
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            };
        });
        return errorDetails;
    }
    return null;
}
module.exports.validateBody = () => {
    return (req, res, next) => {
        let response = {...constants.defaultServerResponse }
        const error = validateObjectSchema(req.body);
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}