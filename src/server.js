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
<<<<<<< HEAD

const config = JSON.parse(fs.readFileSync('config.mongodb.json'));
config.privateKey = fs.readFileSync('config.sshkey.txt');

const server = tunnel(config, (error) => {

  if (error) {
    console.log('SSH connection error:', error);
    return;
  }

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
});

server.on('error', (err) => {
  console.error('Error:', err);
=======
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/plaza-delta', {
  useMongoClient: true,
>>>>>>> godie007/create-schema-types
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
