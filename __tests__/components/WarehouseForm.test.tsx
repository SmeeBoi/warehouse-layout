import React from 'react';
import { render } from '@testing-library/react';
import WarehouseForm from '../../src/components/WarehouseForm';

test('renders WarehouseForm component', () => {
  render(<WarehouseForm createWarehouse={() => {}} />);
});
