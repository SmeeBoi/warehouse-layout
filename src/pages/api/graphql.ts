import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/schema/typeDefs';
import resolvers from '../../graphql/resolvers/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
