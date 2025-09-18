
const express = require('express');
const { signup, login } = require('../controllers/auth');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);


router.post('/admin-login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const bcrypt = require('bcryptjs');
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin._id, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
