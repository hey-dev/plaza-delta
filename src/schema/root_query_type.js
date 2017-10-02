module.exports = `
  # Root
  type Query {
    users: [User]
<<<<<<< HEAD
  }
`;
=======
    user(id: String): User
    establishment(id: String): Establishment
    establishments: [Establishment]
    feedback(id: String): Feedback
  } 
`
>>>>>>> godie007/create-schema-types
