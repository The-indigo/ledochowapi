const path = require('path');

const express = require('express');

const foodController = require('../controllers/foodcontroller');

const router = express.Router();

router.get('/foods',foodController.getFoods)

module.exports = router;