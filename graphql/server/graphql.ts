import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import depthLimit from 'graphql-depth-limit';

import { FileDataSource } from './datasources/FileDataSource';
import { schema } from '../schema';


const apolloServer = new ApolloServer({
  schema,
  dataSources: () => ({
    dataAPI: new FileDataSource(),
  }),
  validationRules: [depthLimit(7)],
  context: ({ req }) => {
    const { authorization: token } = req.headers;

    return { token };
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export async function handler(req: NextApiRequest, res: NextApiResponse) {

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};