const router = require('express').Router()
const { Catalog } = require('../models');


router.get('/', async (req, res) => {

    try {

        res.render('catalog', {
            logged_in: req.session.logged_in,
        });

    } catch (err) {
        res.status(500).json(err);

    }
});


router.get('/:type/:action/:caliber', async (req, res) => {
    const { type, action, caliber } = req.params;
    try {
        const catalogData = await Catalog.findAll({
            where: {
                TYPE: type,
                CALIBERGAUGE: caliber,
                ACTION: action
            }
        });

        const firearm = catalogData.map((firearm) => firearm.get({ plain: true }));

        console.log(firearm);

        res.render('catalog', {
            firearm,
            logged_in: req.params.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

// router.get('/:ITEMNO', async (req, res) => {
//     try {
//         const
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



module.exports = router;



    // TYPE: req.params.TYPE,
    // CALIBERGAUGE: req.body.CALIBERGAUGE,
    // ACTION: req.body.ACTION
