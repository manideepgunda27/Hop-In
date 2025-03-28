const mongoose = require("mongoose");
const User = require("../models/users.model");
const Ride = require("../models/ride.model");
const Booking = require("../models/booking.model");
const Review = require("../models/review.model");
const Chat = require("../models/chat.model");

main().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb+srv://Hopin:TNkLoEO9CEJ7IShE@hopin.tebf5.mongodb.net/hopin", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

const createUser = async () => {
    const user = new User({
        name: "John",
        email: "john@gmail.com",
        password: "keshavsai",
        phone: 6302895626,
        role: "driver",
        vehicle: {
            model: 'Ather',
            number: 'TS11EW3255'
        },
        ratings: [4, 5, 3],
        averageRating: 4
    });
    await user.save();
    console.log("User created:", user);
};

const createRide = async () => {
    const ride = new Ride({
        driver: "671ceec5e3a8865944133d2a",
        origin: "malakpet market",
        destination: "osmania",
        departureTime: new Date(2024, 10, 26, 5, 30, 0),
        availableSeats: 2,
        pricePerSeat: 30,
        vehicle: "swift"
    });
    console.log("hello");
    await ride.save();
    console.log("Ride Created: ", ride);
};

const createBooking = async () => {
    const booking = new Booking({
        ride: "671ceec5e3a8865944133d2a",
        rider: "671cf90aa5ce03898b4fec08",
        seatsBooked: 3,
        totalCost: 55,
    });
    await booking.save();
    console.log("Booking created:", booking);
};

const createChat = async () => {
    const chat = new Chat({
        sender: "671ceec5e3a8865944133d2a",
        receiver: "671cf90aa5ce03898b4fec08",
        content: "I am waiting",
    });
    await chat.save();
    console.log("Chat created:", chat);
};

const createReview = async () => {
    const review = new Review({
        ride: "671ceec5e3a8865944133d2a",
        reviewer: "671cf90aa5ce03898b4fec08",
        rating: 4,
    });
    await review.save();
    console.log("Review created:", review);
};

main();
createRide();
createBooking();
createChat();
createReview();