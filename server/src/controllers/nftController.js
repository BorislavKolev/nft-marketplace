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

module.exports = router;