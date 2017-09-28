const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// [Deliveries|idDeliveries;idDeliveryMan;idEstablishment;createdAt;updatedAt]
const DeliveriesSchema = new Schema({
  idDeliveryMan: {
    type: Schema.Types.ObjectId,
    ref: 'deliveryMan',
  },
  idEstablishment: {
    type: Schema.Types.ObjectId,
    ref: 'establishment'
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
mongoose.model('deliveries', DeliveriesSchema);