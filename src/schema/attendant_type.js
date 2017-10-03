module.exports = `
  type Attendant implements Person, Audit {
    id: ID!
    fullName: String!
    email: String!
    phone: String!
    document: String!
    createdAt: String
    updatedAt: String
   }

  #args
  input AttendantInput {
    fullName: String!
    email: String!
    phone: String!
    document: String!
 }
`;