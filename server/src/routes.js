const router = require('express').Router();

const nftController = require('./controllers/nftController');
const authController = require('./controllers/authController');

router.use('/nfts', nftController);
router.use('/auth', authController);

module.exports = router;