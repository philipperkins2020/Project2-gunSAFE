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
        res.render('modinventory', {
            user, 
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/editinventory/:id", withAuth, async (req, res) => {
    try {
        const persData = await Personal.findByPk(req.params.id, {
            attributes: ["id", 
                        "manufacturer", 
                        "model", 
                        "type_id",
                        "serial_number",
                        "caliber",
                        "barrel_len",
                        "action",
                        "purchase_date",
                        "sloc",
                        "cost",
                        "user_id",
                    ],
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
                
            ],
        });

        const post = persData.get({ plain: true });

        res.render("editinventory", { post, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});





























module.exports = router;