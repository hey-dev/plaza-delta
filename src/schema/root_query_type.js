module.exports = `
  type Query {
    users: [User]
    user(id: String): User
    account: Account
    accounts: [Account]
  }
`
