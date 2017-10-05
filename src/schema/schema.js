const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('../resolvers');
const Mutations = require('./mutations');

// types
const Account = require('./account_type');
const Attendant = require('./attendant_type');
const Establishment = require('./establishment_type');
const Feedback = require('./feedback_type');
const Order = require('./order_type');
const Product = require('./product_type');
const ShoppingCart = require('./shopping_cart_type');
const User = require('./user_type');
const RootQueryType = require('./root_query_type');
const WorkingHoursType = require('./working_hour_type');
const LocationType = require('./location_type');
const CategoryType = require('./category_type');

const schema = makeExecutableSchema({
  typeDefs: [
    RootQueryType,
    Mutations,
    Account,
    Attendant,
    Establishment,
    Feedback,
    Order,
    Product,
    ShoppingCart,
    User,
    WorkingHoursType,
    LocationType,
    CategoryType,
  ],
  resolvers,
});

module.exports = schema;