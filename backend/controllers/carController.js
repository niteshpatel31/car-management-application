const Car = require('../models/car');

// Create a Car
exports.createCar = async (req, res) => {
  const { title, description, tags } = req.body;
  const images = req.files.map(file => file.path);
  try {
    const car = new Car({ userId: req.user._id, title, description, images, tags });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: 'Could not create car.' });
  }
};

// Get All Cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({ userId: req.user._id });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve cars.' });
  }
};

// Get Car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.params.id, userId: req.user._id });
    if (!car) return res.status(404).json({ message: 'Car not found.' });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve car.' });
  }
};

// Update Car
exports.updateCar = async (req, res) => {
  const { title, description, tags } = req.body;
  try {
    const car = await Car.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { title, description, tags },
      { new: true }
    );
    if (!car) return res.status(404).json({ message: 'Car not found.' });
    res.json(car);
  } catch (error) {
    res.status(400).json({ message: 'Update failed.' });
  }
};

// Delete Car
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!car) return res.status(404).json({ message: 'Car not found.' });
    res.json({ message: 'Car deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed.' });
  }
};
