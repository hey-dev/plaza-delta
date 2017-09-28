const mongoose = require('mongoose');
const User = mongoose.model('user');

const resolvers = {
  Query: {
    users: () => User.find({})
  }
}

module.exports = resolvers
