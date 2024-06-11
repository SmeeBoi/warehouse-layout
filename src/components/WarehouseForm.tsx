import React, { useState } from 'react';
import { createWarehouse } from '../utils/api';

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

const WarehouseForm: React.FC = () => {
  const [warehouseName, setWarehouseName] = useState('');
  const [zones, setZones] = useState<Zone[]>(
    Array.from({ length: 12 }, (_, i) => ({ number: i + 1, shelves: [] }))
  );
  const [error, setError] = useState<string | null>(null);

  const maxShelvesPerZone = 2; // Change this value for testing purposes

  const handleAddShelf = (zoneIndex: number) => {
    const newZones = [...zones];
    if (newZones[zoneIndex].shelves.length >= maxShelvesPerZone) {
      setError(
        `Each zone can only contain a maximum of ${maxShelvesPerZone} shelves.`
      );
      return;
    }
    newZones[zoneIndex].shelves.push({
      name: '',
      zone: newZones[zoneIndex].number,
    });
    setZones(newZones);
    setError(null); // Clear any previous errors
  };

  const handleShelfNameChange = (
    zoneIndex: number,
    shelfIndex: number,
    newName: string
  ) => {
    const newZones = [...zones];
    newZones[zoneIndex].shelves[shelfIndex].name = newName;
    setZones(newZones);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const warehouse: Warehouse = {
      name: warehouseName,
      zones,
    };
    try {
      const result = await createWarehouse(warehouse);
      console.log('Warehouse created:', result);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error creating warehouse:', err);
        setError(err.message);
      } else {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Warehouse Name:</label>
        <input
          className="p-2 border border-gray-300 rounded"
          value={warehouseName}
          onChange={(e) => setWarehouseName(e.target.value)}
        />
      </div>
      {zones.map((zone, zoneIndex) => (
        <div key={zoneIndex} className="flex flex-col space-y-2">
          <label className="font-semibold">Zone {zone.number}:</label>
          {zone.shelves.map((shelf, shelfIndex) => (
            <div key={shelfIndex} className="flex items-center space-x-2">
              <label className="font-semibold">
                Shelf {shelfIndex + 1} Name:
              </label>
              <input
                className="p-2 border border-gray-300 rounded"
                value={shelf.name}
                onChange={(e) =>
                  handleShelfNameChange(zoneIndex, shelfIndex, e.target.value)
                }
              />
            </div>
          ))}
          {zone.shelves.length >= maxShelvesPerZone && (
            <div className="text-red-500 text-sm">
              Maximum of {maxShelvesPerZone} shelves allowed per zone.
            </div>
          )}
          <button
            type="button"
            className={`px-4 py-2 rounded text-white ${
              zone.shelves.length >= maxShelvesPerZone
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
            onClick={() => handleAddShelf(zoneIndex)}
            disabled={zone.shelves.length >= maxShelvesPerZone}
          >
            Add Shelf
          </button>
        </div>
      ))}
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Create Warehouse
      </button>
    </form>
  );
};

export default WarehouseForm;
