interface Shelf {
  name: string;
  zone: number;
}

interface Zone {
  number: number;
  shelves: Shelf[];
}

interface Warehouse {
  id: number;
  name: string;
  zones: Zone[];
}

interface WarehouseInput {
  name: string;
  zones: Zone[];
}

const warehouses: Warehouse[] = [];

const resolvers = {
  Query: {
    warehouses: (): Warehouse[] => warehouses,
  },
  Mutation: {
    createWarehouse: (
      _: any,
      { input }: { input: WarehouseInput }
    ): Warehouse => {
      const newWarehouse: Warehouse = {
        id: warehouses.length + 1,
        ...input,
      };
      warehouses.push(newWarehouse);
      return newWarehouse;
    },
  },
};

export default resolvers;
