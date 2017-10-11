module.exports = `
# Root
type Query {
  users: [User]
  user(id: ID!): User
  products: [Product]
  product(id: ID!): Product
  establishment(id: ID!): Establishment
  establishments: [Establishment]
  workingHour(id: ID!): WorkingHour
  workingHours: [WorkingHour]
  location(id: ID!): Location
  locations: [Location]
  order(id: ID!): Order
  orders: [Order]
  category(id: ID!): Category
  categories: [Category]
  feedback(id: ID!): Feedback
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