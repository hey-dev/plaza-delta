require("./models");
const bodyParser = require("body-parser");
const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
const resolvers = require("./resolvers");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/plaza-delta", {
  useMongoClient: true
});
mongoose.connection
  .once("open", () => console.log("ʕ·ᴥ·ʔ connected to MongoDB"))
  .on("error", err => console.log(err));

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    resolvers
  })
);
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

module.exports = app;
