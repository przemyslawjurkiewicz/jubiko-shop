const express = require('express');
const router = express.Router();

var routerControllerProduct = require('./routerControllerProduct');


router.route('/').get(routerControllerProduct.home);
router.route('/product/:id').get(routerControllerProduct.productById)

module.exports = router;