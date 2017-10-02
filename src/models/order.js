const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// [Order|idOrder;idUser;idEstablishment;idProduct;createdAt;updatedAt]
const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  address: {
    type: String,
  },
  total: {
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
mongoose.model('order', OrderSchema);