const Product = require('../models/Product');

const routerController = {
  home: (req, res) => {
    Product.find().exec((err, products) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ products });
    });
  },

  product: (req, res) => {
    if (!req.params.id) {
      res.status(500).send('ID field is required.');
    }

    Product.findOne({ _id: req.params.id }).exec((err, product) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json({ product });
      });
  }
};
module.exports = routerController;

//if (!req.params.productId) {
// res.status(500).send("ID field is required.");
//} else {
//  inventoryDB.findOne({ _id: req.params.productId }, function(err, product) {
//    res.send(product);
//  });
