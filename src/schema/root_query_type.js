module.exports = `
  # Root
  type Query {
    users: [User]
    user(id: String): User
    establishment(id: String): Establishment
    establishments: [Establishment]
    feedback(id: String): Feedback
  }
`;