const Nft = require('../models/Nft');
const User = require('../models/User');

exports.create = async (nftData) => {
    await Nft.create(nftData)

    let creatorId = nftData.creator;
    let createdNft = await Nft.findOne({ title: nftData.title });
    let nftId = await createdNft.toObject()._id;
    console.log(nftId)

    await User.findOneAndUpdate({ _id: creatorId }, { $push: { createdNfts: nftId } },
        { runValidators: true }); 
    await User.findOneAndUpdate({ _id: creatorId }, { $push: { ownedNfts: nftId } },
        { runValidators: true }); 
};

exports.getAll = () => Nft.find().lean();

exports.getOne = (nftId) => Nft.findById(nftId).populate('favourites');

exports.updateOne = (nftId, nftData) => Nft.findByIdAndUpdate(nftId, nftData);

exports.delete = (nftId) => Nft.findByIdAndDelete(nftId);