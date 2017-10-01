const mongoose = require('mongoose');
const Account = mongoose.model('account');
const Attendant = mongoose.model('attendant');
const Establishment = mongoose.model('establishment');
const User = mongoose.model('user');


const resolvers = {
  Query: {
    user: (parentValue, { id }) => User.findById(id),
    users: () => User.find({}),
    establishment: (parentValue, { id }) => Establishment.findById(id),
    establishments: () => Establishment.find({})
  },
  User: {
    account(user) {
      return User.findAccount(user._id);
    }
  },
  Establishment: {
    attendant(establishment) {
      return Establishment.findAttendant(establishment._id)
    }
  },
  Mutation: {
    createUser: (_, { account, user }) =>
      Account.create(account).then(account => {
        user['account'] = account.id;
        return User.create(user);
      })
      .catch(err => console.log(err)),

    createEstablishment: (_, { attendant, establishment }) =>
      Attendant.create(attendant).then(attendant => {
        establishment['attendant'] = attendant.id;
        return Establishment.create(establishment);
      })
      .catch(err => console.log(err))
  }
};

module.exports = resolvers;
