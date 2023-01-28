const express = require('express');
const router = express.Router();

router.use('/', require('./user'));
router.use('/news', require('./news'));

module.exports = router;
