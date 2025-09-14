const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String },
  age: { type: String }, // Changed to String to match frontend
  gender: { type: String },
  location: { type: String },
  status: { type: String, default: 'available' },
  profilePhoto: { type: String },
  images: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema);