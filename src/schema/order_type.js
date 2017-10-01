module.exports = `
	type Order {
		id: ID!
		user: User!
		establishment: Establishment!
		product: Product!
		createdAt: String
		updatedAt: String
	}	
	# args
	input OrderInput {		
		user: String!
		establishment: String!
		product: String!
	}
`
