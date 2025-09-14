const express = require('express');
const { signup, login } = require('../controllers/auth');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/admin-login', async (req, res) => {
  const { username, password } = req.body;
  if (username !== 'pawishAdmin' || password !== 'securePawish2025') {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: username, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;