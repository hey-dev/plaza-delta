module.exports = `
  # Root
  type Query {
    users: [User]
    user(id: String): User
    account(id: String): Account
    accounts: [Account]
  } 
`
