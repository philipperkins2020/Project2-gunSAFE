const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mySafeRoutes = require('./mySafeRoutes');
const catalogRoutes = require('./catalogRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/mysafe', mySafeRoutes);
router.use('/catalog', catalogRoutes);


module.exports = router;
