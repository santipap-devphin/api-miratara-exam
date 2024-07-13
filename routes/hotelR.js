const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelController');

router.get('/:id' , hotelController.getHotel);
router.get('/room/:id' , hotelController.getRoomByHotel);
router.get('/room-detail/:id' , hotelController.getRoomTypeDetail);


module.exports = router;