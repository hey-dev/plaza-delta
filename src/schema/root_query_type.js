const graphql = require('graphql');
const axios = require('axios');
const { 
	GraphQLObjectType, 
	GraphQLString,
	GraphQLID,	
	GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },		
		email: { type: GraphQLString },		
		phone: { type: GraphQLString }
	})
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
	  users: {
			type: new GraphQLList(UserType),
			resolve() {
				return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data);
			}
		}
	})
});

module.exports = RootQuery;