import { makeExecutableSchema } from 'graphql-tools';

import resolvers from '../resolvers';
import RootQueryType from './root_query_type';
import User from './user_type';

const schema = makeExecutableSchema({
  typeDefs: [RootQueryType, User],
  resolvers,
});

export default schema;