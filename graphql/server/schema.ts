import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';

import { resolvers } from './resolvers';

import { typeDefs } from '../schema/schema.graphql';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
