module.exports = `
  type Order  implements Audit {
    id: ID!
    user: User!
    name: String!
    description: String
    products: [Product]
    address: String!
    total: Float!
    createdAt: String
    updatedAt: String
  }
  # args
  input OrderInput {
    name: String!
    description: String
    user: String!
    address: String!
    total: Float!
  }
`;