const Booking = require('../models/booking.model');  
const Ride = require('../models/ride.model');  

// Book a ride
exports.bookRide = async (req, res) => {
    try {
        const { rideId, rider, seatsBooked } = req.body;

        const ride = await Ride.findById(rideId);

        if (!ride) {
            return res.status(404).json({ error: 'Ride not found' });
        }

        if (seatsBooked > ride.availableSeats) {
            return res.status(400).json({ error: 'Not enough available seats' });
        }

        const totalCost = seatsBooked * ride.pricePerSeat;

        const booking = new Booking({
            ride: rideId,
            rider,
            seatsBooked,
            totalCost
        });

        await booking.save();

        ride.availableSeats -= seatsBooked;
        await ride.save();

        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all bookings for a user
exports.getUserBookings = async (req, res) => {
    try {
        const { userId } = req.params; 
        const bookings = await Booking.find({ rider: userId }).populate('ride');  
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
