module.exports = `
  type Establishment  implements Audit {
    id: ID!
    name: String!
    address: String!
    phone: String!
    attendant: Attendant
    zone: String
    longitude: String
    latitude: String
    createdAt: String
    updatedAt: String
  }

  # args
  input EstablishmentInput {
    name: String!
    address: String!
    phone: String!
    zone: String
    longitude: String
    latitude: String
  }
`;