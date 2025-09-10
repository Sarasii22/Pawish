const mongoose = require('mongoose');

const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
    const adminExists = await Admin.findOne({ username: 'admin' });
    if (!adminExists) {
      const admin = new Admin({ username: 'admin', password: await bcrypt.hash('adminpass', 10) });
      await admin.save();
      console.log('Admin created');
    }
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;