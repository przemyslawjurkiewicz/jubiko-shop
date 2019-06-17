const Order = require('../models/Order');

const routerControllerOrder = {
  postOrder: (req, res) => {
    const newOrder = new Order({
      id: req.body.id,
      userId: req.body.userId,
      summary: req.body.summary,
      products: req.body.products
    });
    newOrder
      .save()
      //.then(order => res.json(order))
      .catch(err => console.log(err));
  },

  orderByUserId: (req, res) => {
    if (!req.params.id) {
      res.status(500).send('ID field is required.');
    }
    Order.find({userId: req.params.id}).exec((err, orders) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({orders});
    });
  }
};
module.exports = routerControllerOrder;
