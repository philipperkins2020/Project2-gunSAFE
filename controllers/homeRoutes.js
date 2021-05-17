const router = require('express').Router()
const { User } = require('../models');

router.get('/', (req, res) => {
    try {
        res.render('homepage', {
            // logged_in: req.seesion.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});





router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/mySafe');
      return;
    }
    res.render('login');
});


router.get('/newuser', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/mySafe');
        return;
    }
    res.render('newuser');
});

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).redirect('/');
        });
    }
    else {
        res.status(204).redirect('/');
    }
});

module.exports = router