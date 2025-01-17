const express = require('express');
const Cars = require('./carsDb');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const carList = await Cars.get();
    res.status(200).json(carList);
  } catch (error) {
    next(error);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});
router.post('/', async (req, res, next) => {
  const { VIN, make, model, mileage, transmissionType, statusOfTitle } = req.body;
  try {
    const car = await Cars.insert({ VIN, make, model, mileage, transmissionType, statusOfTitle });
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { VIN, make, model, mileage, transmissionType, statusOfTitle } = req.body;
  try {
    const car = await Cars.update(id, { VIN, make, model, mileage, transmissionType, statusOfTitle });
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await Cars.delete(id);
    res.status(200).json(car);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(500).json({
    file: 'carsRouter',
    method: req.method,
    url: req.url,
    message: error.message
  })
});

module.exports = router;