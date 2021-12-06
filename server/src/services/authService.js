const jwt = require('../jswUtils');
const User = require('../models/User');
const { JWT_SECRET } = require('../constants');

exports.login = async ({ email, password }) => {
    let user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid email or password');
    }

    let isValid = await user.validatePassword(password);
    
    if (!isValid) {
        throw new Error('Invalid email or password');
    }

    // Creating JWT token. Might need additional infomation!
    let payload = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    };

    let token = await jwt.sign(payload, JWT_SECRET);

    return token;
}

exports.register = (userData) => User.create(userData);