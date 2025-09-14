const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const Admin = require('./models/Admin');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

const seedAdmin = async () => {
  try {
    await Admin.deleteMany({ username: 'admin' });
    const admin = new Admin({
      username: 'admin',
      password: await bcrypt.hash('adminpass', 10),
    });
    await admin.save();
    console.log('Admin added to database with username "admin" and password "adminpass"');
  } catch (err) {
    console.error('Error adding admin:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedAdmin();