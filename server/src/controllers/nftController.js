const router = require('express').Router();

const nftService = require('../services/nftService');

router.post('/create', async (req, res) => {
    await nftService.create({...req.body});

    res.json({ok: true});
});

router.get('/all', async (req, res) => {
    let nfts = await nftService.getAll();

    res.json({ nfts });
});

router.get('/:nftId/details', async (req, res) => {
    let nft = await nftService.getOne(req.params.nftId);

    res.json({ nft });
});

router.post('/:nftId/update', async (req, res) => {
        await nftService.updateOne(req.params.nftId, req.body);

        res.json({ok: true});
});

router.get('/:nftId/remove', async (req, res) => {
    await nftService.removeNftFromUserCollections(req.params.nftId);
    await nftService.delete(req.params.nftId);

    res.json({ok: true});
});

router.get('/:userId/ownedNfts', async (req, res) => {
    let nfts = await nftService.findNftsOwnedByUser(req.params.userId);

    res.json({ nfts });
});

router.get('/:userId/createdNfts', async (req, res) => {
    let nfts = await nftService.findNftsCreatedByUser(req.params.userId);

    res.json({ nfts });
});

router.get('/:userId/favouriteNfts', async (req, res) => {
    let nfts = await nftService.findNftsFavouritedByUser(req.params.userId);

    res.json({ nfts });
});

router.get('/:nftId/buy/:buyerId', async (req, res) => {
     try {
        await nftService.buy(req.params.nftId, req.params.buyerId);

        res.json({ok: true});

    } catch(err) {

        res.json({error: err});
    }

});

router.get('/latest', async (req, res) => {
    let nfts = await nftService.getLatest();

    res.json({ nfts });
});

module.exports = router;