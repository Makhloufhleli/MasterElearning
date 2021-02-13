const express = require('express');
const router = express.Router();

const HomeController = require('../controller/HomeController');

//define the route to get the users list
router.get('/', HomeController.getHomePage);

module.exports = router;