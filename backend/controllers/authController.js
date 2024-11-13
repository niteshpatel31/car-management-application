const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// User Registration
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(400).json({ message: 'Registration failed.' });
  }
};

// User Login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    res.json({ token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: 'Login failed.' });
  }
};
