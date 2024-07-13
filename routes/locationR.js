const express = require('express');
const router = express.Router();
const locationController = require('../controller/locationController');

router.get('/' , locationController.getLocation);

module.exports = router;