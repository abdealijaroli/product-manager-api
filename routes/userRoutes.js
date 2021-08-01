const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const joiSchemaValidation = require('../middleware/joiSchemaValidation')
const userSchema = require('../api_schema/userSchema')

router.post('/signup',
    joiSchemaValidation.validateUserBody(userSchema.signup),
    userController.signup
);

router.post('/login',
    joiSchemaValidation.validateUserBody(userSchema.login),
    userController.login
);

module.exports = router;