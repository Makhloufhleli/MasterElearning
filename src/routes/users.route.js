const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

//define the routes
router.get('/', UserController.getUsresList);//to get all users
router.get('/:id', UserController.getUserById);//to get user by id

module.exports = router;