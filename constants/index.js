module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully!',
        PRODUCT_FETCHED: 'Product Fetched Successfully!',
        PRODUCT_UPDATE: 'Product Updated Successfully!',
        PRODUCT_DELETED: 'Product Deleted Successfully.',
        PRODUCT_NOT_FOUND: 'Product Not Found.'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup success!',
        DUPLICATE_EMAIL: 'User already exists with the given email.'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid field'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}