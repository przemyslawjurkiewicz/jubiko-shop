const express = require('express');
const router = express.Router();

var routerController = require('./routerController');


router.route('/').get(routerController.home);
router.route('/product/:id').get(routerController.product)

module.exports = router;