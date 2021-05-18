const router = require('express').Router()
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username =userData.username;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        if (!userData) {
            console.log('cannot find user');
            res.status(400).json({ message: 'Email not valid, please try again.'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Password not valid, please try again.' })
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username =userData.username;
            req.session.logged_in = true;

            
        });
        res.redirect('/mysafe');
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;
