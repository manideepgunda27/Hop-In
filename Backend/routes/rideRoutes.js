const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).send('Access denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // User's data is available in req.user
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};
router.post('/new-ride', verifyToken, rideController.createRide);
router.get('/available', rideController.getAllRides);

module.exports = router;