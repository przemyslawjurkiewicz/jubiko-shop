const express = require('express');
const router = express.Router();

var routerController = require('./routerController');


router.route('/').get(routerController.home);


module.exports = router;