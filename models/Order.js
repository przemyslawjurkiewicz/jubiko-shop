const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema

const OrderSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: String,
    required: true,
    unique: false
  },
  summary: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  products: []
});

module.exports = Order = mongoose.model('orders', OrderSchema);
