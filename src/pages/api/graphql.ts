import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../graphql/schema/typeDefs';
import { resolvers } from '../../graphql/resolvers'; // Change the import statement

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
