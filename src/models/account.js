const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
    unique: true,
  },
  showTutorial: {
    type: Boolean,
    default: true,
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
mongoose.model('account', AccountSchema);