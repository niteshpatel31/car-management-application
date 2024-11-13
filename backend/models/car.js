const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  images: [String], // URLs of car images
  tags: [String],   // e.g., car type, company
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
