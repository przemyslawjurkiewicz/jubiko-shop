const express = require('express');
const router = express.Router();

var routerControllerOrder = require('./routerControllerOrder');


router.route('/order').post(routerControllerOrder.postOrder);
router.route('/order/:id').get(routerControllerOrder.orderByUserId)
module.exports = router;