const router = require('express').Router();

const authService = require('../services/authService');

router.post('/login', async (req, res) => {
    try {
        let authData = await authService.login({...req.body});

        res.json({ ...authData });

    } catch(err) {

        res.status(401).json(`${err}`);
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        await authService.register({
            username,
            email,
            password,
            balance: 100,
        });
   
        let token = await authService.login({
            email,
            password
        });

        res.json({token: token});

    } catch(err) {

        res.json({error: err});
    }
});


router.post('/logout', async (req, res) => {
    res.json({ok: true});
});

module.exports = router;