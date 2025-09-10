const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  petId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  fullName: { type: String },
  address: { type: String },
  phone: { type: String },
  livingSituation: { type: String },
  experience: { type: String },
  reason: { type: String },
  status: { type: String, default: 'pending' }, // pending, approved, rejected
}, { timestamps: true });

module.exports = mongoose.model('AdoptionRequest', adoptionSchema);