const express = require('express');
const models = require('./models');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');



const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/plaza-delta')
mongoose.connection.once('open',()=>console.log('Conexion Correcta!')).on('error',error=>console.log(error))

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));


module.exports = app;