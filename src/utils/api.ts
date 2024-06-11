import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

interface Shelf {
  name: string;
  zone: number;
}

interface Zone {
  number: number;
  shelves: Shelf[];
}

interface Warehouse {
  name: string;
  zones: Zone[];
}

export const createWarehouse = async (warehouse: Warehouse) => {
  const CREATE_WAREHOUSE_MUTATION = gql`
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

  try {
    const response = await client.mutate({
      mutation: CREATE_WAREHOUSE_MUTATION,
      variables: { input: warehouse },
    });

    if (!response.data) {
      throw new Error('No data returned from the server');
    }

    return response.data.createWarehouse;
  } catch (error) {
    console.error('Error creating warehouse:', error);
    throw error;
  }
};
