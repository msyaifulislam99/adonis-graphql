'use strict'

import { GraphQLSchema } from 'graphql';
import query from './schema/schemaQuery';
// import query from './schemaQuery';
// import mutation from './schemaMutation';
// import { subscription } from './schemaSubscription';

const schema = new GraphQLSchema({
  query: query,
  // mutation: mutation,
  // subscription: subscription
});

module.exports = {
  schema
};
