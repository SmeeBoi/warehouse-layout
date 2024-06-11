import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Shelf {
    name: String!
    zone: Int!
  }

  type Zone {
    number: Int!
    shelves: [Shelf!]!
  }

  type Warehouse {
    id: ID!
    name: String!
    zones: [Zone!]!
  }

  input ShelfInput {
    name: String!
    zone: Int!
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
    createWarehouse(input: WarehouseInput!): Warehouse!
  }

  type Query {
    warehouses: [Warehouse!]!
  }
`;
