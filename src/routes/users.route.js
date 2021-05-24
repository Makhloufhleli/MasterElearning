const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

//define the routes
router.get('/user', UserController.getUsresList);//to get all users
router.get('/user:id', UserController.getUserById);//to get user by id
router.post('/user', UserController.createUser);//to create a new user
router.put('/user:id', UserController.updateUser);//to update user
router.delete('/user:id', UserController.deleteUser);// to delete user

module.exports = router;
