const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fullName: { type: String },
  email: { type: String },
  phone: { type: String },
  amount: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);