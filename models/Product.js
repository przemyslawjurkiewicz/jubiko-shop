const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-double')(mongoose);
const SchemaTypes = mongoose.Schema.Types;
// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  price: {
    type: SchemaTypes.Double,
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
