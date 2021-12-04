const Nft = require('../models/Nft');

exports.create = (nftData) => Nft.create(nftData);
