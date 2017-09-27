const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Base mongoose schema
// replace for real User Schema
const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

// add Model methods below ...
mongoose.model('user', UserSchema);