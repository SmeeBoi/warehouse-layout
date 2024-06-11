import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Warehouse {
    id: ID!
    name: String!
    zones: [Zone!]!
  }

  type Zone {
    id: ID!
    number: Int!
    shelves: [Shelf!]!
  }

  type Shelf {
    id: ID!
    name: String!
  }

  input WarehouseInput {
    name: String!
    zones: [ZoneInput!]!
  }

  input ZoneInput {
    number: Int!
    shelves: [ShelfInput!]!
  }

  input ShelfInput {
    name: String!
  }

  type Mutation {
    createWarehouse(warehouseInput: WarehouseInput!): Warehouse!
  }

  type Query {
    warehouses: [Warehouse!]!
  }
`;
