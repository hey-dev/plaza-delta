const Account = require('./account_type')
const User = require('./user_type')
module.exports = `
  type Query {
    accounts: [Account]
    users: [User]
    user(id: String): User
  }
`
