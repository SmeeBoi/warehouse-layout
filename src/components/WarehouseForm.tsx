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
      logger.log('Created Warehouse:', newWarehouse);
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Warehouse Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      {zones.map((zone, i) => (
        <div key={i}>
          <label>
            Zone {i + 1}:
            <input
              type="number"
              value={zone.number}
              onChange={(e) =>
                handleZoneChange(i, 'number', Number(e.target.value))
              }
              min="1"
              max="12"
            />
          </label>
          {zone.shelves.map((shelf, j) => (
            <div key={j}>
              <label>
                Shelf {j + 1} Name:
                <input
                  type="text"
                  value={shelf.name}
                  onChange={(e) => handleShelfChange(i, j, e.target.value)}
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={() => handleAddShelf(i)}>
            Add Shelf
          </button>
        </div>
      ))}
      <button type="submit">Create Warehouse</button>
    </form>
  );
};

export default WarehouseForm;
