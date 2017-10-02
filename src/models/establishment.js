const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EstablishmentSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    unique: true,
  },
  attendant: {
    type: Schema.Types.ObjectId,
    ref: 'attendant',
  },
  zone: {
    type: String,
  },
  longitude: {
    type: String,
  },
  latitude: {
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

EstablishmentSchema.statics.findAttendant = function findAttendant(id) {
  return this.findById(id)
    .populate('attendant')
    .then(establishment => establishment.attendant);
};

mongoose.model('establishment', EstablishmentSchema);