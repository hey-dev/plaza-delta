const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// [Order|idOrder;idUser;idEstablishment;idProduct;createdAt;updatedAt]
const ShoppingCart = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'product',
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'order',
  },
  quantity: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// add Model methods below ...
mongoose.model('shoppingCart', ShoppingCart);