const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//[Establishment|idEstablishment;name;address;phone;idAttendant;zone;lon

const EstablishmentSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  address: {
    type: String
  },
  phone: {
    type: String,
    unique: true
  },
  Attendant: {
    type: Schema.Types.ObjectId,
    ref: "attendant"
  },
  zone: {
    type: String
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
});

EstablishmentSchema.statics.findAttendant = function(id) {
  return this.findById(id)
    .populate('attendant')
    .then(establishment => establishment.attendant);
};

mongoose.model("establishment", EstablishmentSchema);
