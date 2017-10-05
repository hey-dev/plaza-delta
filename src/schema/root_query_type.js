module.exports = `
  # Root
  type Query {
    users: [User]
    user(id: String): User
    products: [Product]
    product(id: String): Product
    establishment(id: String): Establishment
    establishments: [Establishment]
    workingHour(id: String): WorkingHour
    workingHours: [WorkingHour]
    location(id: String): Location
    locations: [Location]
    category(id: String): Category
    categorys: [Category]
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