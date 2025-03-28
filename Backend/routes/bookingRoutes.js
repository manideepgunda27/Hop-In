const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/bookings', bookingController.bookRide);
router.get('/bookings/:userId', bookingController.getUserBookings);

module.exports = router;
