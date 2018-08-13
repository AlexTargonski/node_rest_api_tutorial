const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
      message: 'Draste, sending GET requests to /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
      message: 'Draste, sending POST requests to /products'
  });
});

router.get('/:id', (req, res, next) => {
  const productId = req.params.id;
  res.status(200).json({
      id: productId
  });
});

router.patch('/:id', (req, res, next) => {
  res.status(200).json({
      message: `Updated product with id ${req.params.id}`
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
      message: `Deleted product with id ${req.params.id}`
  });
});

module.exports = router;
