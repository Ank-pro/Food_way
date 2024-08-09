const express = require('express');
const getDishes = require('../controllers/dishesController')
const route = express.Router();

route.get('/dishes',getDishes)

module.exports = route;