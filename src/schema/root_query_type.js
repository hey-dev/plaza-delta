module.exports = `
  # Root
  type Query {
    users: [User]
    user(id: String): User
    products: [Product]
    product(id: String): Product
    establishment(id: String): Establishment
    establishments: [Establishment]
    feedback(id: String): Feedback
  }
  interface Person {
    id: ID!
    fullName: String!
    email: String!
    phone: String!
    document: String!
    createdAt: String
    updatedAt: String
  }
  interface Audit {
    createdAt: String
    updatedAt: String
  }
`;