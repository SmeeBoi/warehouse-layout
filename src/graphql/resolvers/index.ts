interface Shelf {
  id: number;
  name: string;
}

interface Zone {
  id: number;
  number: number;
  shelves: Shelf[];
}

interface Warehouse {
  id: number;
  name: string;
  zones: Zone[];
}

const warehouses: Warehouse[] = [];

export const resolvers = {
  Query: {
    warehouses: (): Warehouse[] => warehouses,
  },
  Mutation: {
    createWarehouse: (
      _: any,
      { warehouseInput }: { warehouseInput: WarehouseInput },
    ): Warehouse => {
      const newWarehouse: Warehouse = {
        id: warehouses.length + 1,
        name: warehouseInput.name,
        zones: warehouseInput.zones.map((zoneInput, index) => ({
          id: index + 1,
          number: zoneInput.number,
          shelves: zoneInput.shelves.map((shelfInput, shelfIndex) => ({
            id: shelfIndex + 1,
            name: shelfInput.name,
          })),
        })),
      };
      warehouses.push(newWarehouse);
      return newWarehouse;
    },
  },
};

interface ShelfInput {
  name: string;
}

interface ZoneInput {
  number: number;
  shelves: ShelfInput[];
}

interface WarehouseInput {
  name: string;
  zones: ZoneInput[];
}
