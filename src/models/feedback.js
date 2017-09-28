const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// [Feedback|idFeedback;idUser;idEstablishment;description;ranking;createdAt;updatedAt]
const DeliveriesSchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  idEstablishment: {
    type: Schema.Types.ObjectId,
    ref: 'establishment'
  },
  description: {
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