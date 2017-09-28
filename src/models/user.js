const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true 
  },
  phone: {
    type: String,
  },
  document: {
    type: String,
  },
  idAccount: {
    type: Schema.Types.ObjectId,
    ref: 'account'
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
mongoose.model('user', UserSchema);