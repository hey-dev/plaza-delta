module.exports = `
  type Location  implements Audit {
    id: ID!
    user: User
    address: String
    longitude: String
    latitude: String
    createdAt: String
    updatedAt: String
  }

  # args
  input LocationInput {
    user: String!
    address: String!
    longitude: String
    latitude: String
  }
`;