// rehash-admin.js
const mongoose = require('mongoose');
require('dotenv').config();
const Admin = require('./models/Admin');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const admin = await Admin.findOne({ username: 'admin' });
    if (!admin) {
      console.log('No admin found; creating one.');
      const a = new Admin({ username: 'admin', password: 'adminpass' });
      await a.save();
      console.log('Admin created');
    } else {
      // if password doesn't start with $2 (bcrypt), update it
      if (!/^\$2[aby]\$/.test(admin.password)) {
        admin.password = 'adminpass';
        await admin.save();
        console.log('Admin password rehashed');
      } else {
        console.log('Admin password already hashed');
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
})();
