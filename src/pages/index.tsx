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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Warehouse Layout Manager</h1>
        <WarehouseForm createWarehouse={createWarehouse} />
      </div>
    </div>
  );
};

export default HomePage;
