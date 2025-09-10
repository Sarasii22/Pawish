const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  petName: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String },
  gender: { type: String },
  healthCondition: { type: String },
  location: { type: String, required: true },
  photo: { type: String }, // URL placeholder
  story: { type: String },
  reason: { type: String },
  status: { type: String, default: 'pending' }, // pending, approved
}, { timestamps: true });

module.exports = mongoose.model('PetAlert', alertSchema);