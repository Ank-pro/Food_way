const express = require('express');
const {registerUser,loginUser} = require('../controllers/userController');

const route = express.Router();

route.post('/user/register',registerUser);

route.post('/user/login',loginUser)

module.exports = route;

