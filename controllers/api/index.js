const router = require('express').Router();
const userRoutes = require('./userRoutes');
const personalRoutes = require('./personalRoutes');
const safetyRoutes = require('./safetyRoutes');

router.use('/user', userRoutes);
router.use('/personal', personalRoutes);
router.use('/safety', safetyRoutes);

module.exports = router;