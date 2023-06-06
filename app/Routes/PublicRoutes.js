const express = require('express');
const router = express.Router();
const maincontroller = require('../Controller/maincontroller');

router.get('/',maincontroller.index);
router.get('*',maincontroller.error);

module.exports = router;