const mongoose = require('mongoose');

let nftSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    price: {
        type: Number,
    },
    forSale: {
        type: Boolean,
    },
    favourites: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});

nftSchema.method('getFavourites', function() {
    let userString = this.favourites.map(x => x._id).join(', ');
    return userArr = userString.split(', ');
}); 

let Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft;