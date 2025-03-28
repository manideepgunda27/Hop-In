const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    enum: ['driver', 'rider'], // A user can either offer rides (driver) or take rides (rider)
    default: 'rider'
  },
  vehicle: {
    type: {
      model: String,
      number: String
    }
  },
  ratings: {
    type: [Number], // Array of ratings
    default: []
  },
  averageRating: {
    type: Number,
    default: 0
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
