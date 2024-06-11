import React, { useState } from 'react';

interface Shelf {
  name: string;
  zone: number;
}

interface WarehouseFormProps {
  createWarehouse: (warehouse: {
    name: string;
    zones: Array<{ number: number; shelves: Shelf[] }>;
  }) => void;
}

const WarehouseForm: React.FC<WarehouseFormProps> = ({ createWarehouse }) => {
  const [warehouseName, setWarehouseName] = useState('');
  const [zones, setZones] = useState([
    { number: 1, shelves: [{ name: '', zone: 1 }] },
  ]);

  const handleAddShelf = () => {
    const newZones = [...zones];
    newZones[0].shelves.push({ name: '', zone: 1 });
    setZones(newZones);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createWarehouse({
      name: warehouseName,
      zones,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Warehouse Name:
        <input
          value={warehouseName}
          onChange={(e) => setWarehouseName(e.target.value)}
        />
      </label>
      {zones.map((zone, zoneIndex) => (
        <div key={zoneIndex}>
          <label>
            Zone {zone.number}:
            <input value={zone.number} readOnly />
          </label>
          {zone.shelves.map((shelf, shelfIndex) => (
            <label key={shelfIndex}>
              Shelf {shelfIndex + 1} Name:
              <input
                value={shelf.name}
                onChange={(e) => {
                  const newZones = [...zones];
                  newZones[zoneIndex].shelves[shelfIndex].name = e.target.value;
                  setZones(newZones);
                }}
              />
            </label>
          ))}
          <button type="button" onClick={handleAddShelf}>
            Add Shelf
          </button>
        </div>
      ))}
      <button type="submit">Create Warehouse</button>
    </form>
  );
};

export default WarehouseForm;
