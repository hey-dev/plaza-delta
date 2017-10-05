const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkingHours = new Schema({
  establishment: {
    type: Schema.Types.ObjectId,
    ref: 'establishment',
  },
  timeStart: {
    type: Date,
  },
  timeEnd: {
    type: Date,
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
mongoose.model('workingHour', WorkingHours);