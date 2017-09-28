const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('../resolvers');
const RootQueryType = require('./root_query_type');
const User = require('./user_type')
const Account = require('./account_type')

const schema = makeExecutableSchema({
  typeDefs: [RootQueryType, User, Account],
  resolvers
})

module.exports = schema