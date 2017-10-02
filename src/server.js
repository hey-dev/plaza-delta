require('./models');

const bodyParser = require('body-parser');
const express = require('express');
const expressGraphQL = require('express-graphql');
const fs = require('fs');
const mongoose = require('mongoose');
const tunnel = require('tunnel-ssh');

const schema = require('./schema/schema');
const resolvers = require('./resolvers');

const app = express();
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/plaza-delta', {
  useMongoClient: true,
});
mongoose.connection
  .once('open', () => console.log('ʕ·ᴥ·ʔ connected to MongoDB'))
  .on('error', err => console.log(err));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  resolvers,
  graphiql: true,
}));

module.exports = app;
