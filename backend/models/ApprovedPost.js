const mongoose = require('mongoose');

const approvedPostSchema = new mongoose.Schema({
  alertId: { type: mongoose.Schema.Types.ObjectId, ref: 'PetAlert', required: true },
  petName: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String },
  age: { type: String },
  gender: { type: String },
  profilePhoto: { type: String },
  images: [{ type: String }],
  cityTown: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('ApprovedPost', approvedPostSchema);