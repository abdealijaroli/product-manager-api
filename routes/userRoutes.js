const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
const joiSchemaValidation = require('../middleware/joiSchemaValidation')
const userSchema = require('../api_schema/userSchema')

router.post('/signup',
    joiSchemaValidation.validateUserBody(userSchema.signup),
    userController.signup
);

module.exports = router;