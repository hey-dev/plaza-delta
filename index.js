const app = require('./src/server');

app.listen(8000, () => {
  console.log('(ﾉ◕ヮ◕)ﾉ GraphiQL Console running on http://localhost:8000/graphql');
});