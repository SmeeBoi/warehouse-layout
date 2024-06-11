import React, { useState } from 'react';
import { createWarehouse } from '../utils/api';
import logger from '../utils/logger';

interface Shelf {
  name: string;
}

interface Zone {
  number: number;
  shelves: Shelf[];
}

const WarehouseForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [zones, setZones] = useState<Zone[]>([
    { number: 1, shelves: [{ name: '' }] },
  ]);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const warehouseInput = { name, zones };
    try {
      const newWarehouse = await createWarehouse(warehouseInput);
      logger.debug('Created Warehouse:', newWarehouse);
      // Handle successful creation (e.g., reset form, show success message)
    } catch (err) {
      logger.error('Error creating warehouse:', err);
      // Handle error (e.g., show error message)
    }
  };

  const handleAddShelf = (zoneIndex: number): void => {
    setZones(
      zones.map((zone, i) =>
        i === zoneIndex
          ? { ...zone, shelves: [...zone.shelves, { name: '' }] }
          : zone
      )
    );
  };

  const handleZoneChange = (index: number, field: string, value: any): void => {
    setZones(
      zones.map((zone, i) => (i === index ? { ...zone, [field]: value } : zone))
    );
  };

  const handleShelfChange = (
    zoneIndex: number,
    shelfIndex: number,
    value: string
  ): void => {
    setZones(
      zones.map((zone, i) =>
        i === zoneIndex
          ? {
              ...zone,
              shelves: zone.shelves.map((shelf, j) =>
                j === shelfIndex ? { ...shelf, name: value } : shelf
              ),
            }
          : zone
      )
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Warehouse Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      {zones.map((zone, i) => (
        <div key={i} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Zone {i + 1}:
            <input
              type="number"
              value={zone.number}
              onChange={(e) =>
                handleZoneChange(i, 'number', Number(e.target.value))
              }
              min="1"
              max="12"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
          {zone.shelves.map((shelf, j) => (
            <div key={j} className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Shelf {j + 1} Name:
                <input
                  type="text"
                  value={shelf.name}
                  onChange={(e) => handleShelfChange(i, j, e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddShelf(i)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Shelf
          </button>
        </div>
      ))}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Warehouse
      </button>
    </form>
  );
};

export default WarehouseForm;
