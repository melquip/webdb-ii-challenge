const express = require('express');
const Cars = require('./carsDb');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ message: "ok" });
});
router.get('/:id', (req, res, next) => {
  res.status(200).json({ message: "ok" });
});
router.post('/', (req, res, next) => {
  res.status(200).json({ message: "ok" });
});
/*
router.put('/:id', (req, res, next) => {
  res.status(200).json({ message: "ok" });
});
router.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: "ok" });
});
*/

module.exports = router;