import mongoose from 'mongoose';

const User = mongoose.model('user');

const resolvers = {
  Query: {
    users: () => User.find({}),
  },
};

export default resolvers;