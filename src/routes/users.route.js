const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

//define the routes
router.get('/', UserController.getUsresList);//to get all users
router.get('/:id', UserController.getUserById);//to get user by id
router.post('/', UserController.createUser);//to create a new user
router.put('/:id', UserController.updateUser);//to update user
router.delete('/:id', UserController.deleteUser);// to delete user

module.exports = router;