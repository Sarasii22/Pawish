require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Require routes only once
const authRoutes = require('./routes/auth');
const petRoutes = require('./routes/pet');
const adoptionRoutes = require('./routes/adoption');
const alertRoutes = require('./routes/alert');
const donationRoutes = require('./routes/donation');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/adoptions', adoptionRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/donations', donationRoutes);

const start = async () => {
  await connectDB();
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
};
start();