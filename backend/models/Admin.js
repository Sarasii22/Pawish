// models/admin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Hash only when needed and avoid double-hashing if a bcrypt hash is already present
adminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  // if the password already looks like a bcrypt hash, skip hashing
  if (typeof this.password === 'string' && /^\$2[aby]\$/.test(this.password)) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// instance method to compare password
adminSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('Admin', adminSchema);
