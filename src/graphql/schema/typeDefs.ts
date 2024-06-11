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

  input ShelfInput {
    name: String!
  }

  input ZoneInput {
    number: Int!
    shelves: [ShelfInput!]!
  }

  input WarehouseInput {
    name: String!
    zones: [ZoneInput!]!
  }

  type Mutation {
    createWarehouse(warehouseInput: WarehouseInput!): Warehouse!
  }

  type Query {
    warehouses: [Warehouse!]!
  }
`;
