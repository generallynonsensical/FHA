import React from 'react';
import TableModule from '../components/TableModule';

// Define the OutputModule component
const OutputModule: React.FC = () => {
  // State management and logic for displaying output data will go here

  return (
    <div className="table-container">
      {/* Render the TableModule component to display output data */}
      <TableModule />
    </div>
  );
};

export default OutputModule;