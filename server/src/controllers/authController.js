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
   
        let authData = await authService.login({
            email,
            password
        });

        res.json({ ...authData });

    } catch(err) {

        res.json({error: err});
    }
});


router.post('/logout', async (req, res) => {
    res.json({ok: true});
});

router.get('/:userId/details', async (req, res) => {
    let user = await authService.getOne(req.params.userId);

    res.json({ user });
});

module.exports = router;