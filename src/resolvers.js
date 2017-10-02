const mongoose = require('mongoose');

const Account = mongoose.model('account');
const Attendant = mongoose.model('attendant');
const Establishment = mongoose.model('establishment');
const Feedback = mongoose.model('feedback');
const Order = mongoose.model('order');
const Product = mongoose.model('product');
const ShoppingCart = mongoose.model('shoppingCart');
const User = mongoose.model('user');

const resolvers = {
  Query: {
    user: (parentValue, { id }) => User.findById(id),
    users: () => User.find({}),
    establishment: (parentValue, { id }) => Establishment.findById(id),
    establishments: () => Establishment.find({}),
    feedback: (parentValue, { id }) => Feedback.findById(id),
  },
  User: {
    account(user) {
      return User.findAccount(user._id); // eslint-disable-line
    },
  },
  Establishment: {
    attendant(establishment) {
      return Establishment.findAttendant(establishment._id); // eslint-disable-line
    },
  },
  Mutation: {
    createUser: (_, { account, user }) =>
      Account.create(account).then((accountCreated) => {
        user.account = accountCreated.id; // eslint-disable-line
        return User.create(user);
      }).catch(err => console.log(err)),

    createEstablishment: (_, { attendant, establishment }) =>
      Attendant.create(attendant).then((attendantCreated) => {
        establishment.attendant = attendantCreated.id; // eslint-disable-line
        return Establishment.create(establishment);
      }).catch(err => console.log(err)),

    createFeedback: (_, { feedback }) => Feedback.create(feedback),

    createProduct: (_, { product }) => Product.create(product),

    createOrder: (_, { order, shoppingCart }) =>
      Order.create(order).then((orderCreated) => {
        shoppingCart.forEach((cart) => {
          cart.order = orderCreated.id; // eslint-disable-line
          ShoppingCart.create(cart);
        });
        return orderCreated;
      }).catch(err => console.log(err)),
  },
};

module.exports = resolvers;