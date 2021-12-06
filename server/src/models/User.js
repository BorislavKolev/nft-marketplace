const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    balance: {
        type: Number,
    },
    createdNfts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Nft',
        }
    ],
    ownedNfts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Nft',
        }
    ],
    favouriteNfts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Nft',
        }
    ],
});

userSchema.pre('save', function(next) {
    return bcrypt.hash(this.password, SALT_ROUNDS)
        .then((hash) => {
            this.password = hash;

            return next();
        });
});

userSchema.method('validatePassword', function(password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;