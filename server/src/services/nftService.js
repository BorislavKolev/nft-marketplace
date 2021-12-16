const Nft = require('../models/Nft');
const User = require('../models/User');
const mongoose = require('mongoose');


const authService = require('./authService');

exports.create = async (nftData) => {
    await Nft.create(nftData)

    let creatorId = nftData.creator;
    let createdNft = await Nft.findOne({ title: nftData.title });
    let nftId = await createdNft.toObject()._id;
    console.log('NFT created:')
    console.log(nftId)

    await User.findOneAndUpdate({ _id: creatorId }, { $push: { createdNfts: nftId } },
        { runValidators: true }); 
    await User.findOneAndUpdate({ _id: creatorId }, { $push: { ownedNfts: nftId } },
        { runValidators: true }); 
};

exports.getAll = () => Nft.find({forSale: true}).lean();

exports.getOne = (nftId) => Nft.findById(nftId).populate('favourites');

exports.updateOne = (nftId, nftData) => Nft.findByIdAndUpdate(nftId, nftData);

exports.delete = (nftId) => Nft.findByIdAndDelete(nftId);

exports.removeNftFromUserCollections = async (nftId) => {
    let deletedNft = await Nft.findById(nftId).populate('favourites');
    let deletedNftData = await deletedNft.toObject();
    let ownerId = deletedNftData.owner;
    let creatorId = deletedNftData.creator;
    let favourites = deletedNft.getFavourites();
    let nftObjectId = mongoose.Types.ObjectId(nftId);
    console.log('owner:')
    console.log(ownerId);
    console.log('creator:')
    console.log(creatorId);
    console.log('favourites:')
    console.log(favourites);
    // Removing NFT from owner collection
    let owner = await authService.getOne(ownerId);
    const indexOfNftInOwned = owner.ownedNfts.indexOf(nftObjectId);
    owner.ownedNfts.splice(indexOfNftInOwned, 1);
    let ownerData = await owner.toObject();
    await authService.updateOne(ownerId, ownerData);
    // Removing NFT from creator collection
    let creator = await authService.getOne(creatorId);
    const indexOfNftInCreated = creator.createdNfts.indexOf(nftObjectId);
    creator.createdNfts.splice(indexOfNftInCreated, 1);
    let creatorData = await creator.toObject();
    await authService.updateOne(creatorId, creatorData);
    //Removing NFT from favourites collections
    if(favourites != null) {
        console.log('tryies')
        for (const favId of favourites) {
            let currentFavourite = await authService.getOne(favId);
            const indexOfNftInFavourite = currentFavourite.favouriteNfts.indexOf(nftObjectId);
            currentFavourite.favouriteNfts.splice(indexOfNftInFavourite, 1);
            let favouriteData = await currentFavourite.toObject();
            await authService.updateOne(favId, favouriteData);
        };
    }
      
    
   
}

exports.findNftsOwnedByUser = (userId) => Nft.find({owner: userId}).lean();

exports.findNftsCreatedByUser = (userId) => Nft.find({creator: userId}).lean();

exports.findNftsFavouritedByUser = (userId) => Nft.find({favourites: {$in: [userId]}}).lean();


exports.buy = async (nftId, buyerId) => {
    try {
        console.log('in buy backend ')
        let nft = await Nft.findById(nftId).populate('favourites');
        let nftData = await nft.toObject();
        let ownerId = nftData.owner;

        let buyerAsObjectId = mongoose.Types.ObjectId(buyerId);
        nftData.owner = buyerAsObjectId;
        nftData.forSale = false;
        let nftOperation = await Nft.findByIdAndUpdate(nftId, nftData);
        let nftObjectId = mongoose.Types.ObjectId(nftId);

    
        let owner = await authService.getOne(ownerId);
        const indexOfNftInOwned = owner.ownedNfts.indexOf(nftObjectId);
        owner.ownedNfts.splice(indexOfNftInOwned, 1);
        let ownerData = await owner.toObject();
        ownerData.balance += nftData.price;
        await authService.updateOne(ownerId, ownerData);
        console.log('seller')
        console.log(ownerData)
    
        let buyer = await authService.getOne(buyerId);
        buyer.ownedNfts.push(nftObjectId);
        let buyerData = await buyer.toObject();
        buyerData.balance -= nftData.price;
        await authService.updateOne(buyerId, buyerData);
        console.log('buyer')
        console.log(buyerData)
    } catch (error) {
        console.log(error)
    }
}

exports.getLatest = () => Nft.find({forSale: true}).sort('-createdAt').limit(4).lean();

