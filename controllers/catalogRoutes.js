const router = require('express').Router()
const { Catalog } = require('../models');

router.get('/', async (req, res) => {
    try {
        const catalogData = await Catalog.findAll({
            where: {
                TYPE: 'Semi-Auto Pistol',
                CALIBERGAUGE: '9mm',
                ACTION: 'Double Action Only'
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



module.exports = router;