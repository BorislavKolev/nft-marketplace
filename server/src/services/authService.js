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
        username: user.username,
        email: user.email,
    };

    let token = await jwt.sign(payload, JWT_SECRET);


    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        accessToken: token,
    };
}

exports.register = (userData) => User.create(userData);

exports.getOne = (userId) => User.findById(userId).populate('createdNfts', 'ownedNfts', 'favouriteNfts');