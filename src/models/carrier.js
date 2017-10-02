const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarrierSchema = new Schema({
  establishment: {
    type: Schema.Types.ObjectId,
    ref: 'establishment',
  },
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
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

CarrierSchema.statics.findEstablisment = function findEstablisment(id) {
  return this.findById(id)
    .populate('establishment')
    .then(carrier => carrier.establishment);
};

mongoose.model('carrier', CarrierSchema);