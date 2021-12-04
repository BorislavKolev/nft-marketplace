const router = require('express').Router();

const nftController = require('./controllers/nftController');

router.use('/nfts', nftController);

module.exports = router;