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
  account: {
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

UserSchema.statics.findAccount = function(id) {
  return this.findById(id)
    .populate('account')
    .then(user => user.account);
}

mongoose.model('user', UserSchema);
