const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SearchHistorySchema = new Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  description: {
    type: String,
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
mongoose.model('searchHistory', SearchHistorySchema);