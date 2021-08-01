const User = require('../db/models/userModel')
const constants = require('../constants/index')
const { formatMongoData } = require('../helper/dbHelper')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup = async({ email, password }) => {
    try {
        let user = await User.findOne({ email });
        if (user) {
            throw new Error(constants.userMessage.DUPLICATE_EMAIL);
        }
        password = await bcrypt.hash(password, 12);
        const newUser = new User({ email, password });
        let result = await newUser.save();

        return formatMongoData(result);
    } catch (error) {
        console.log('Error: Services: signup:', error);
        throw new Error(error);
    }
}

module.exports.login = async({ email, password }) => {
    try {
        let user = await User.findOne({ email });
        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error(constants.userMessage.INVALID_PASS)
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY || 'random-secret-key', { expiresIn: "1d" })
        return { token };
    } catch (error) {
        console.log('Error: Services: signup:', error);
        throw new Error(error);
    }
}