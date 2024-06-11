import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../graphql/schema/typeDefs';
import { resolvers } from '../../graphql/resolvers';
import { NextApiRequest, NextApiResponse } from 'next';

// Create the Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Ensure the server is started before creating the handler
const startServer = apolloServer.start();

// Disable body parsing for GraphQL
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
