module.exports = `
	type Product {
		id: ID!
		name: String!
		price: Float!
		description: String!		
		establishment: Establishment
		createdAt: String
		updatedAt: String
	}	
	# args
	input ProductInput {		
		name: String!
		price: Float!
		description: String!		
		establishment: String!
	}
`