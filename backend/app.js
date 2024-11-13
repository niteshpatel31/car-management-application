const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);

module.exports = app;
