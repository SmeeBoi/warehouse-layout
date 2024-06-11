import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define the function to handle the GraphQL mutation for creating a new warehouse
export const createWarehouse = async (warehouseInput: any): Promise<any> => {
  const mutation = `
    mutation CreateWarehouse($warehouseInput: WarehouseInput!) {
      createWarehouse(warehouseInput: $warehouseInput) {
        id
        name
        zones {
          id
          number
          shelves {
            id
            name
          }
        }
      }
    }
  `;

  const response = await api.post('/graphql', {
    query: mutation,
    variables: { warehouseInput },
  });

  return response.data.data.createWarehouse;
};

export default api;
