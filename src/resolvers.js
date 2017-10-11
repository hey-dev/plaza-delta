const mongoose = require('mongoose');

const Account = mongoose.model('account');
const Attendant = mongoose.model('attendant');
const Establishment = mongoose.model('establishment');
const Feedback = mongoose.model('feedback');
const Order = mongoose.model('order');
const Product = mongoose.model('product');
const ShoppingCart = mongoose.model('shoppingCart');
const User = mongoose.model('user');
const Location = mongoose.model('location');
const WorkingHour = mongoose.model('workingHour');
const Category = mongoose.model('category');

const resolvers = {
  Query: {
    user: (parentValue, { id }) => User.findById(id),
    users: () => User.find({}),
    workingHour: (parentValue, { id }) => WorkingHour.findById(id),
    workingHours: () => WorkingHour.find({}),
    location: (parentValue, { id }) => Location.findById(id),
    locations: () => Location.find({}),
    order: (parentValue, { id }) => Order.findById(id),
    orders: () => Order.find({}),
    category: (parentValue, { id }) => Category.findById(id),
    categorys: () => Category.find({}),
    products: () => Product.find({}),
    product: (parentValue, { id }) => Product.findById(id),
    establishment: (parentValue, { id }) => Establishment.findById(id),
    establishments: () => Establishment.find({}),
    feedback: (parentValue, { id }) => Feedback.findById(id),
  },
  User: {
    account(user) {
      return User.findAccount(user._id); // eslint-disable-line
    },
    orders(user) {
      return Order.find({
        user: user.id,
      }, {
        name: 1,
        description: 1,
        total: 1,
        createdAt: 1,
      }).sort( { createdAt: -1 }).limit(5) // eslint-disable-line
    },
  },
  Establishment: {
    attendant(establishment) {
      return Establishment.findAttendant(establishment.id); // eslint-disable-line
    },
    products(establishment) {
      return Product.find({
        establishment: establishment.id,
      }) // eslint-disable-line
    },
    workingHours(establishment) {
      return WorkingHour.find({
        establishment: establishment.id,
      }) // eslint-disable-line
    },
  },
  Product: {
    establishment(product) {
      return Product.findEstablishment(product.id); // eslint-disable-line
    },

  },
  Order: {
    products(order) {
      return ShoppingCart.find({ order: order.id })
        .then(cart => Product.findById(mongoose.Types.ObjectId(cart.product))
          .then(p => console.log(p))); // eslint-disable-line
    },
  },
  Mutation: {
    createUser: (_, { account, user }) =>
      Account.create(account).then((accountCreated) => {
        user.account = accountCreated.id; // eslint-disable-line
        return User.create(user);
      }).catch(err => console.log(err)),
    createWorkingHour: (_, { workingHour }) => WorkingHour.create(workingHour).catch(err => console.log(err)),

    createEstablishment: (_, { category, attendant, establishment, workingHours }) =>
      // se crean el que atiende
      Attendant.create(attendant)
        .then((attendantCreated) => {
        establishment.attendant = attendantCreated.id; // eslint-disable-line
          return establishment;
          // se crea la categoria
        }).then(establishmentWithAttendant => Category.create(category).then((categoryCreated) => {
          establishmentWithAttendant.category = categoryCreated.id; // eslint-disable-line
          return establishmentWithAttendant;
          // se crea el establecimiento
        }).then(establishmentWithCategory => Establishment.create(establishmentWithCategory)
          .then((establishmentCreated) => {
            // se crean los horarios de atencion
            workingHours.forEach((workingHour) => {
              workingHour.establishment = establishmentCreated.id; // eslint-disable-line
              WorkingHour.create(workingHour);
            });
            return establishmentCreated;
          }))
          .catch(err => console.log(err))).catch(err => console.log(err)),

    createFeedback: (_, { feedback }) => Feedback.create(feedback),
    createProduct: (_, { product }) => Product.create(product),
    createCategory: (_, { category }) => Category.create(category),
    createLocation: (_, { location }) => Location.create(location),

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

