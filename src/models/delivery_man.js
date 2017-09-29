const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeliveryManSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  document: {
    type: String,
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
mongoose.model('deliveryMan', DeliveryManSchema);