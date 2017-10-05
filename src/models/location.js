const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Location = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  address: {
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

// add Model methods below ...
mongoose.model('location', Location);