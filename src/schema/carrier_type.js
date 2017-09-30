module.exports = `
	Type Carrier {
		id: ID!
		fullName: String!
		email: String!
		phone: String!
		document: String!
		#establishment: Establishment
		createdAt: String
		updatedAt: String		
	}

	#args 
	input CarrierInput {
	 fullName: String!
	 email: String!
	 phone: String!
	 document: String!
	}
`;
