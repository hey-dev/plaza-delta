module.exports = `
<<<<<<< HEAD
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String
  }
`;
=======
	type User {
		id: ID!
		fullName: String!
		email: String!
		phone: String!
		document: String!
		account: Account
		createdAt: String
		updatedAt: String
	}	
	# args
	input UserInput {
		fullName: String!
		email: String!
		phone: String!
		document: String!
	}
`
>>>>>>> godie007/create-schema-types
