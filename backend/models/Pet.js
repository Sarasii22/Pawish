const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String },
  age: { type: Number, required: true },
  gender: { type: String },
  status: { type: String, default: 'available' }, // available, adopted
  photo: { type: String }, // URL placeholder
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema);