import React from 'react';
import WarehouseForm from '../components/WarehouseForm';

const HomePage: React.FC = () => {
  const createWarehouse = (warehouse: {
    name: string;
    zones: Array<{ number: number; shelves: Array<{ name: string }> }>;
  }) => {
    // Implement the logic to handle warehouse creation
    console.log('Warehouse created:', warehouse);
  };

  return (
    <div>
      <h1>Warehouse Layout Manager</h1>
      <WarehouseForm createWarehouse={createWarehouse} />
    </div>
  );
};

export default HomePage;
