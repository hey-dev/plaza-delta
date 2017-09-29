module.exports = `
	type User {
		id: ID!
		fullName: String!
		email: String!
		phone: String
		document: String
		account: Account
		createdAt: String
		updatedAt: String
	}	
	input UserInput {
		fullName: String
		email: String
		phone: String
		document: String
		account: String
	}
`
