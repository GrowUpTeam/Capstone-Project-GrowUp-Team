const express = require('express');
const router = express.Router();
const modelMiddleware = require('../middlewares/modelMiddleware');
const modelController = require('../controllers/modelController');

router.post(
  '/get-data', 
  modelMiddleware,
  modelController.hewan
);

module.exports = router;
