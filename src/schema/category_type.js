module.exports = `
  type Category implements Audit {
    id: ID!
    parent: String
    name: String
    products:[Product]
    description: String
    createdAt: String
    updatedAt: String
  }

  # args
  input CategoryInput {
    parent: String
    name: String!
    description: String
  }
`;