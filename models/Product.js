const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  price: {
    type: String,
    required: true,
    unique: false
  },
  shortDescription: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: true,
    unique: false
  },
  category: {
    type: String,
    required: true,
    unique: false
  },
  imgSrc: {
    type: String,
    required: true,
    unique: false
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    required: true,
    unique: false
  }
});

module.exports = Product = mongoose.model('products', ProductSchema);
