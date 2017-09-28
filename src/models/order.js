const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// [Order|idOrder;idUser;idEstablishment;idProduct;createdAt;updatedAt]
const OrderSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  idEstablishment: {
    type: Schema.Types.ObjectId,
    ref: 'establishment'
  },
  idProduct: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
  }
});

// add Model methods below ...
mongoose.model('order', OrderSchema);