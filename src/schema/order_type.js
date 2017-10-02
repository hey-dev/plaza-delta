module.exports = `
  type Order {
    id: ID!
    user: User!
    address: String!
    total: Float!
    createdAt: String
    updatedAt: String
  }
  # args
  input OrderInput {
    user: String!
    address: String!
    total: Float!
  }
`;