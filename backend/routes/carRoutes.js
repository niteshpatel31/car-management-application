const express = require('express');
const { createCar, getAllCars, getCarById, updateCar, deleteCar } = require('../controllers/carController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.use(authMiddleware);
router.post('/', upload.array('images', 10), createCar);
router.get('/', getAllCars);
router.get('/:id', getCarById);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

module.exports = router;
