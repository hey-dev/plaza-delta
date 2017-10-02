const mongoose = require('mongoose');
<<<<<<< HEAD

=======
const Account = mongoose.model('account');
const Attendant = mongoose.model('attendant');
const Establishment = mongoose.model('establishment');
const Feedback = mongoose.model('feedback');
const Order = mongoose.model('order');
const Product = mongoose.model('product');
>>>>>>> godie007/create-schema-types
const User = mongoose.model('user');
const ShoppingCart = mongoose.model('shoppingCart');
const _ = require('lodash');



const resolvers = {
  Query: {
<<<<<<< HEAD
    users: () => User.find({}),
  },
};

module.exports = resolvers;
=======
    user: (parentValue, { id }) => User.findById(id),
    users: () => User.find({}),
    establishment: (parentValue, { id }) => Establishment.findById(id),
    establishments: () => Establishment.find({}),
    feedback: (parentValue, { id }) => Feedback.findById(id)
  },
  User: {
    account(user) {
      return User.findAccount(user._id);
    }
  },
  Establishment: {
    attendant(establishment) {
      return Establishment.findAttendant(establishment._id);
    }
  },
  Mutation: {
    createUser: (_, { account, user }) =>
      Account.create(account).then(account => {
        user['account'] = account.id;
        return User.create(user);
      }).catch(err => console.log(err)),

    createEstablishment: (_, { attendant, establishment }) =>
      Attendant.create(attendant).then(attendant => {
        establishment['attendant'] = attendant.id;
        return Establishment.create(establishment);
      }).catch(err => console.log(err)),

      createFeedback: (_, { feedback }) => Feedback.create(feedback),
      createProduct: (_, { product }) => Product.create(product),
      createOrder: (_, { order,shoppingCart }) => 
        Order.create(order).then(order => {
          shoppingCart.forEach(cart => {
            cart['order'] = order.id;
            ShoppingCart.create(cart);
          })
          return order;
        }),
  }
};

module.exports = resolvers;
>>>>>>> godie007/create-schema-types
