const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mySafeRoutes = require('./mySafeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/mySafe', mySafeRoutes);


module.exports = router;
