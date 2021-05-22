const router = require('express').Router();
const { Personal } = require('../../models');
// const sequelize = require('../../config/connection');
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

// Changes/edits info in the firearm
router.put('/:id', withAuth, async (req, res) => {
    try {
      const persData = await Personal.update(
        {
          
          manufacturer: req.body.manufacturer,
            model: req.body.model,
            type_id: req.body.type_id,
            serial_number: req.body.serial_number,
            caliber: req.body.caliber,
            barrel_len: req.body.barrel_len,
            action: req.body.action,
            purchase_date: req.body.purchase_date,
            sloc: req.body.sloc,
            cost: req.body.cost,
            user_id: req.body.user_id,
        //   // manufacturer: req.body.manufacturer,
        //   // model: req.body.model,
        //   //This is correct...
        },
        {
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        }
      );
  
      if (!persData) {
        res.status(404).json({ message: 'No guns with this id...' });
        return;
      }
  
      res.status(200).json(persData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const persData = await Personal.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!persData) {
        res.status(404).json({ message: "No post with this id..." });
        return;
      }
  
      res.status(200).json(persData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
//   router.get("/editinventory/:id", withAuth, async (req, res) => {
//     try {
//         const persData = await Personal.findByPk(req.params.id, {
//             // attributes: ["id", 
//             //             "manufacturer", 
//             //             "model", 
//             //             "type_id",
//             //             "serial_number",
//             //             "caliber",
//             //             "barrel_len",
//             //             "action",
//             //             "purchase_date",
//             //             "sloc",
//             //             "cost",
//             //             "user_id",
//             //         ],
//             include: [
//                 {
//                     model: User,
//                     attributes: ["username"],
//                 },
                
//             ],
//         });

//         const personal = persData.get({ plain: true });
//         console.log(persData),

//         res.render("editinventory", { personal, logged_in: req.session.logged_in });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });






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




