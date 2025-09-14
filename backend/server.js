require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');
const fs = require('fs');
const path = require('path');

const app = express();

// Create uploads folder if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/pets', require('./routes/pet'));
app.use('/api/adoptions', require('./routes/adoption'));
app.use('/api/alerts', require('./routes/alert'));
app.use('/api/donations', require('./routes/donation'));
app.use('/api/users', require('./routes/user')); // New user route

const start = async () => {
  await connectDB();
  app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));
};
start();