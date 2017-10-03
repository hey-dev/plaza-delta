module.exports = `
  type Account  implements Audit {
    id: ID!
    username: String!
    password: String!
    token: String
    showTutorial: Boolean
    createdAt: String
    updatedAt: String
  }
  # args
  input AccountInput {
    username: String
    password: String
    token: String
  }
`;