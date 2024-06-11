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
  const [zones, setZones] = useState([
    { number: 1, shelves: [{ name: '', zone: 1 }] },
  ]);

  const handleAddShelf = () => {
    const newZones = [...zones];
    newZones[0].shelves.push({ name: '', zone: 1 });
    setZones(newZones);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const warehouse: Warehouse = {
      name: warehouseName,
      zones,
    };
    const result = await createWarehouse(warehouse);
    console.log('Warehouse created:', result);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          <input
            className="p-2 border border-gray-300 rounded"
            value={zone.number}
            readOnly
          />
          {zone.shelves.map((shelf, shelfIndex) => (
            <div key={shelfIndex} className="flex items-center space-x-2">
              <label className="font-semibold">
                Shelf {shelfIndex + 1} Name:
              </label>
              <input
                className="p-2 border border-gray-300 rounded"
                value={shelf.name}
                onChange={(e) => {
                  const newZones = [...zones];
                  newZones[zoneIndex].shelves[shelfIndex].name = e.target.value;
                  setZones(newZones);
                }}
              />
            </div>
          ))}
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAddShelf}
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
