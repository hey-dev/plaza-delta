const mongoose = require('mongoose');
const User = mongoose.model('user');
const Account = mongoose.model('account');

const resolvers = {
  Query: {
    user: (parentValue, args) => User.findById(args.id),
    users: () => User.find({}),
    account: (parentValue, args)  => Account.findById(args.id),
    accounts: () => Account.find({}),
  },
  User: {
    account(user) {
      return User.findAccount(user._id)
    }
  },
  Mutation: {
    createUser: (_, args) => Account.create(args.account).then(accunt => {
      args.user['account'] = accunt.id
      return User.create(args.user)
    })
  } 
}

module.exports = resolvers
