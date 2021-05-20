const router = require('express').Router();
const { Personal } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async  (req, res) => {
    try{
        const newPersonal = await Personal.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPersonal);
    }   catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;

// Code written out but works properly
// router.post('/', withAuth, (req, res) => {
//     Personal.create({
//         manufacturer: req.body.manufacturer,
//         model: req.body.model,
//         type_id: req.body.type_id,
//         serial_number: req.body.serial_number,
//         caliber: req.body.caliber,
//         barrel_len: req.body.barrel_len,
//         action: req.body.action,
//         purchase_date: req.body.purchase_date,
//         sloc: req.body.sloc,
//         cost: req.body.cost,
//         user_id: req.body.user_id
//     })
//     .then(dbPersonalData => res.json(dbPersonalData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });




