module.exports = `
  type WorkingHour implements Audit {
    id: ID!
    establishment: Establishment
    timeStart: String
    timeEnd: String
    createdAt: String
    updatedAt: String
  }

  # args
  input WorkingHourInput {
    establishment: String
    timeStart: String!
    timeEnd: String!
  }
`;