const router = require('express').Router();
const { User, Personal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{ model: Personal }],

        });

        const user = userData.get({ plain: true });

        console.log(user);
        console.log(user.personals.length);
        res.render('mysafe', {
            user, 
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;