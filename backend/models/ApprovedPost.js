const mongoose = require('mongoose');

const approvedPostSchema = new mongoose.Schema({
  alertId: { type: mongoose.Schema.Types.ObjectId, ref: 'PetAlert', required: true },
  // Additional fields if needed from ER
}, { timestamps: true });

module.exports = mongoose.model('ApprovedPost', approvedPostSchema);