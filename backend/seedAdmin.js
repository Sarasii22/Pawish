// seedadmin.js
const mongoose = require('mongoose');
require('dotenv').config();
const Admin = require('./models/Admin');

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for seeding admin');

    const existing = await Admin.findOne({ username: 'admin' });
    if (existing) {
      existing.password = 'adminpass'; // will be hashed by pre-save
      await existing.save();
      console.log('Admin password updated to "adminpass"');
    } else {
      const admin = new Admin({ username: 'admin', password: 'adminpass' });
      await admin.save();
      console.log('Admin created with username "admin" and password "adminpass"');
    }
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    mongoose.connection.close();
  }
};

start();
