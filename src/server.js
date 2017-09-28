import bodyParser from 'body-parser';
import express from 'express';
import expressGraphQL from 'express-graphql';
import fs from 'fs';
import mongoose from 'mongoose';
import tunnel from 'tunnel-ssh';

import './models';
import schema from './schema/schema';
import resolvers from './resolvers';

const app = express();

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
});

export default app;
