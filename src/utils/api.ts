import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Make sure this URL is correct for your setup
const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

const CREATE_WAREHOUSE = gql`
  mutation CreateWarehouse($input: WarehouseInput!) {
    createWarehouse(input: $input) {
      id
      name
      zones {
        number
        shelves {
          name
          zone
        }
      }
    }
  }
`;

export const createWarehouse = async (warehouse: any) => {
  try {
    const result = await client.mutate({
      mutation: CREATE_WAREHOUSE,
      variables: { input: warehouse },
    });
    return result.data.createWarehouse;
  } catch (error) {
    console.error('Error creating warehouse:', error);
    throw error;
  }
};
