const express = require('express');
const router = express.Router();

var routerController = require('./routerControllerUser');


router.route('/register').post(routerController.postRegister);
router.route('/login').post(routerController.postLogin);

module.exports = router;