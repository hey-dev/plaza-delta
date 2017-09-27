const express = require('express');
const models = require('./models');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
var tunnel = require('tunnel-ssh');
const app = express();
var config = {
  username:'heydev',
  host:'35.184.198.215',
  privateKey:require('fs').readFileSync('/home/godie007/.ssh/heydev'),
  port:22,
  dstPort:27017,
  Password:'',
  localHost:'127.0.0.1',
  localPort: 27017,
  keepAlive:true
};

  const server = tunnel(config, function (error, server) {

  if(error){
      console.log("SSH connection error: " + error);
  }
  console.log("Tiner conectado!" + server);
   mongoose.Promise = global.Promise;
   mongoose.connect('mongodb://localhost/plaza-delta',{ useMongoClient: true })
   mongoose.connection.once('open',() => console.log('Conexion Correcta!')).on('error',error=>console.log(error))

   app.use(bodyParser.json());
   app.use('/graphql', expressGraphQL({
     schema,
     graphiql: true
  }));
});
server.on('error', function(err){
  console.error('Error:', err);
});
module.exports = app;