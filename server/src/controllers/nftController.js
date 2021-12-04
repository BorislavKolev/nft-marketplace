const router = require('express').Router();

const nftService = require('../services/nftService');

router.post('/create', async (req, res) => {
    await nftService.create({...req.body});

    res.json({ok: true});
});

router.get('/', async (req, res) => {

    res.json({ok: true});
});

module.exports = router;