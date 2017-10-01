const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('../resolvers');
const Mutations = require('./mutations');
// types
const Account = require('./account_type');
const Attendant = require('./attendant_type');
const Establishment = require('./establishment_type');
const Feedback = require('./feedback_type');
const User = require('./user_type');
const Order = require('./order_type');
const Product = require('./product_type');
const RootQueryType = require('./root_query_type');

const schema = makeExecutableSchema({
  typeDefs: [
    RootQueryType, 
    Account,
    Attendant,
    Establishment,
    Feedback,
    Order,
    Product,
    User, 
    Mutations
  ],
  resolvers
})

module.exports = schema