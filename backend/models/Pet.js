
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String },
  age: { type: String },
  gender: { type: String },
  location: { type: String, default: 'Unknown' },
  status: { type: String, default: 'available' },
  profilePhoto: { type: String },
  images: [{ type: String }],
  behavior: { type: String },
  healthCondition: { type: String },
  goodWith: { type: String },
  story: { type: String },
  reason: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema);
