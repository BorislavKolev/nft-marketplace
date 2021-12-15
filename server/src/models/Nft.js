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
    if (this.favourites.length > 0) {
        console.log('tries');
        let userString = this.favourites.map(x => x._id).join(', ');
        return userArr = userString.split(', ');
    }
    else {
        return null;
    }
}); 

let Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft;