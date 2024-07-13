const express = require('express');
const router = express.Router();
const paymentController = require('../controller/paymentController');

router.get('/' , paymentController.getPayments);

module.exports = router;