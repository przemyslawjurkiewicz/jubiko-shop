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
  products: [
   // {
   //   _id: {
   //     type: String,
   //     required: false,
   //     unique: false
   //   },
  //    name: {
   //     type: String,
    //    required: true,
   //     unique: false
   //   },
   ///   price: {
   //     type: String,
   //     required: true,
   //     unique: false
   //   },
   //   shortDescription: {
   //     type: String,
   //     required: true,
   //     unique: false
   //   },
   //   description: {
   //     type: String,
   //     required: true,
   //     unique: false
   //   },
    //  category: {
    //    type: String,
    //    required: true,
   //     unique: false
   //   },
   //   imgSrc: {
   //     type: String,
   //     required: true,
   //     unique: false
   //   },
   //   id: {
    //    type: String,
    //    required: false,
    //    unique: false
    //  },
    //  quantity: {
    //    type: Number,
    //    required: true,
    //    unique: false
    //  }
   // }
  ]
});

module.exports = Order = mongoose.model('orders', OrderSchema);
