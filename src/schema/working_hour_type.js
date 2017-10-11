module.exports = `
  type WorkingHour implements Audit {
    id: ID!
    establishment: Establishment
    timeStart: Float
    timeEnd: Float
    createdAt: String
    updatedAt: String
  }

  # args
  input WorkingHourInput {
    establishment: String
    timeStart: Float!
    timeEnd: Float!
  }
`;