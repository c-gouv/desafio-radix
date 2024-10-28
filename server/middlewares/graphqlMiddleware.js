const { graphqlHTTP } = require('express-graphql');
const schema = require('../graphql/schema');
const resolver = require('../graphql/resolver');

console.log("Configurou tudo do Graphql")
const graphqlMiddleware = graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
});

module.exports = graphqlMiddleware;