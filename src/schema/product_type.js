module.exports = `
  type Product  implements Audit {
    id: ID!
    name: String!
    price: Float!
    description: String!
    establishment: Establishment
    category: Category
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
`;