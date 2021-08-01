const User = require('../db/models/userModel')
const constants = require('../constants/index')
const { formatMongoData } = require('../helper/dbHelper')
const bcrypt = require('bcrypt');

module.exports.signup = async({ email, password }) => {
    try {
        let user = await User.findOne({ email });
        if (user) {
            throw new Error(constants.userMessage.DUPLICATE_EMAIL)
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