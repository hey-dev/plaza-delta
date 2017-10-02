require('./models');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/plaza-delta', {
  useMongoClient: true,
});
mongoose.connection
  .once('open', () => console.log('ʕ·ᴥ·ʔ connected to MongoDB'))
  .on('error', err => console.log(err));

app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({
  schema,
  formatError: error => ({
    code: 'Error code',
    type: 'Error Type',
    message: error.message,
  }),
}));

app.get('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

module.exports = app;