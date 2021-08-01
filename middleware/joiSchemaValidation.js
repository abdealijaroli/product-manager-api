const productSchema = require('../api_schema/productSchema')
const userSchema = require('../api_schema/userSchema')
const constants = require('../constants/index')

const validateObjectSchema = (data) => {
    const result = productSchema.createProductSchema.validate(data, { convert: false });
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                context: value.context
            };
        });
        return errorDetails;
    }
    return null;
}


const validateUserSchema = (data) => {
    const result = userSchema.signup.validate(data, { convert: false });
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                context: value.context
            };
        });
        return errorDetails;
    }
    return null;
}


module.exports.validateUserBody = () => {
    return (req, res, next) => {
        let response = {...constants.defaultServerResponse }
        const error = validateUserSchema(req.body);
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
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

const validateQuerySchema = (data) => {
    const result = productSchema.getAllProducts.validate(data, { convert: false });
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                context: value.context
            };
        });
        return errorDetails;
    }
    return null;
}

module.exports.validateQueryParams = () => {
    return (req, res, next) => {
        let response = {...constants.defaultServerResponse }
        const error = validateQuerySchema(req.query);
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}

const updateProductSchema = (data) => {
    const result = productSchema.updateProductSchema.validate(data, { convert: false });
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                context: value.context
            };
        });
        return errorDetails;
    }
    return null;
}

module.exports.validateUpdateProductSchema = () => {
    return (req, res, next) => {
        let response = {...constants.defaultServerResponse }
        const error = updateProductSchema(req.body);
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}