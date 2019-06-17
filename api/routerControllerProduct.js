const Product = require('../models/Product');

const routerControllerProduct = {
  home: (req, res) => {
    Product.find().exec((err, products) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({products});
    });
  },

  productById: (req, res) => {
    if (!req.params.id) {
      res.status(500).send('ID field is required.');
    }

    Product.findOne({_id: req.params.id}).exec((err, product) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({product});
    });
  }
};
module.exports = routerControllerProduct;
