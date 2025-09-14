const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  livingSituation: { type: String },
  experience: { type: String },
  reason: { type: String },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('AdoptionRequest', adoptionSchema);