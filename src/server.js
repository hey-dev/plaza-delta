require('./models');

const bodyParser = require('body-parser');
const express = require('express');
const expressGraphQL = require('express-graphql');
const fs = require('fs');
const mongoose = require('mongoose');
const tunnel = require('tunnel-ssh');

const schema = require('./schema/schema');

const app = express();

const config = JSON.parse(fs.readFileSync('config.mongodb.json'));
config.privateKey = fs.readFileSync('config.sshkey.txt');

const server = tunnel(config, (error) => {

  if (error) {
    console.log('SSH connection error:', error);
    return;
  }

  console.log('tunnel connected!');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/plaza-delta', {
    useMongoClient: true,
  });
  mongoose.connection
    .once('open', () => console.log('MongoDB connection success!'))
    .on('error', err => console.log(err));

  app.use(bodyParser.json());
  app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema,
  }));
});

server.on('error', (err) => {
  console.error('Error:', err);
});

module.exports = app;