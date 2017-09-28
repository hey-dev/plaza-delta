const User = require('./user_type')
module.exports = `
  type Query {
    users: [User]
  }
`
