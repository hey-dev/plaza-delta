const mongoose = require("mongoose");
const User = mongoose.model("user");
const Account = mongoose.model("account");

const resolvers = {
  Query: {
    user: (parentValue, args) => User.findById(args.id),
    users: () => User.find({})
  },
  User: {
    account(user) {
      return User.findAccount(user._id);
    }
  },
  Mutation: {
    createUser: (_, { account, user }) =>
      Account.create(account).then(account => {
        user['account'] = account.id;
        return User.create(user);
      })
      .catch(err => console.log(err))
  }
};

module.exports = resolvers;
