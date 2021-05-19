const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mySafeRoutes = require('./mysafeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/mysafe', mySafeRoutes);


module.exports = router;
