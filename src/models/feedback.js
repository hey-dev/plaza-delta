const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliveriesSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  establishment: {
    type: Schema.Types.ObjectId,
    ref: 'establishment'
  },
  comment: {
    type: String,
  },
  ranking: {
    type: Number,
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
mongoose.model('feedback', DeliveriesSchema);