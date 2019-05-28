const Product = require('../models/Product');

const routerController = {
  home: (req, res) => {
    Product.find().exec((err, products) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ products });
    });
  }
};

module.exports = routerController;