const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  petName: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String },
  age: { type: String },
  gender: { type: String },
  behavior: { type: String },
  healthCondition: { type: String },
  goodWith: { type: String },
  cityTown: { type: String, required: true },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  story: { type: String },
  reason: { type: String },
  profilePhoto: { type: String },
  images: [{ type: String }],
  status: { type: String, default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('PetAlert', alertSchema);