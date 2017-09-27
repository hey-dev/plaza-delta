const graphql = require('graphql');
const axios = require('axios');
const mongoose = require('mongoose');
const User = mongoose.model('user');

const { 
	GraphQLObjectType, 
	GraphQLString,
	GraphQLID,	
	GraphQLList
} = graphql;

// Base GraphQL Type
// replace for real Type
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },		
		email: { type: GraphQLString },		
		phone: { type: GraphQLString },
	})	
})

// Base Root query Type
// replace with real query roots
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
	  users: {
			type: new GraphQLList(UserType),
			resolve() {
				return User.find({});
			}
		}
	})
});

module.exports = RootQuery;