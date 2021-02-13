const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

//define the route to get the users list
router.get('/', UserController.getUsresList);

module.exports = router;