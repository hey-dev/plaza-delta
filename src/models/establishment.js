const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//[Establishment|idEstablishment;name;address;phone;idAttendant;zone;lon

const EstablishmentSchema = new Schema({
  name: {
    type: String,
    unique: true 
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    unique: true 
  },
  idAttendant: {
    type: Schema.Types.ObjectId,
    ref: 'attendant'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
  }
});


//// add Model methods below ...[Establishment|idEstablishment;name;address;phone;idAttendant;zone;lon

mongoose.model('establishment', EstablishmentSchema);