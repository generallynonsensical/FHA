// src/pages/index.tsx
import React from 'react';
import InputModule from '../containers/InputModule';
import OutputModule from '../containers/OutputModule';

const App: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2 p-1 border-r border-gray-300">
        <InputModule />
      </div>

      <div className="w-1/2 p-1 border-l border-gray-300">
        <OutputModule />
      </div>
    </div>
  );
};

export default App;