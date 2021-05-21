const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mySafeRoutes = require('./mysafeRoutes');
const catalogRoutes = require('./catalogRoutes');
const modinvRoutes = require('./modinvRoutes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/mysafe', mySafeRoutes);
router.use('/catalog', catalogRoutes);
router.use('/modinventory', modinvRoutes);

module.exports = router;
