const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('../resolvers');
const RootQueryType = require('./root_query_type');
const User = require('./user_type')
const Account = require('./account_type')
const Establishment = require('./establishment_type')
const Attendant = require('./attendant_type')
const Mutations = require('./mutations')

const schema = makeExecutableSchema({
  typeDefs: [
    RootQueryType, 
    User, 
    Account,
    Establishment,
    Attendant,
    Mutations
  ],
  resolvers
})

module.exports = schema