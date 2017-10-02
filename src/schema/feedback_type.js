module.exports = `
  type Feedback {
    id: ID!
    comment: String!
    ranking: Int
    user: User
    establishment: Establishment
    createdAt: String
    updatedAt: String
  }

  # args
  input FeedbackInput {
    comment: String!
    ranking: Int!
    user: String!
    establishment: String!
  }
`;