const mongoose = require('mongoose');
const User = mongoose.model('user');
const Account = mongoose.model('account');

const resolvers = {
  Query: {
    users: () => User.find({}),
    accounts: () => Account.find({}),
    user: (parentValue, args) => User.findById(args.id),
  }
}

module.exports = resolvers
