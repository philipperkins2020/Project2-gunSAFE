const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const personalRoutes = require('./personalRoutes');
// const safetyRoutes = require('./safetyRoutes');
// const catalogRoutes = require('./catalogRoutes');

router.use('/user', userRoutes);
// router.use('/personal', personalRoutes);
// router.use('/safety', safetyRoutes);
// router.use('/catalog', catalogRoutes);

module.exports = router;