const express = require('express');
const router = express.Router();

var routerController = require('./routerController');


router.route('/order').post(routerController.postOrder);
router.route('/order/:id').get(routerController.order)
module.exports = router;