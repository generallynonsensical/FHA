// src/containers/InputModule.tsx

import React from 'react';
import TaskModule from '../components/TaskModule';
import HazardModule from '../components/HazardModule';
import ControlModule from '../components/ControlModule';

const InputModule: React.FC = () => {
  // Your state management and logic will go here

  return (
    <div className="accordion-container">
      <TaskModule />
      <HazardModule />
      <ControlModule />
    </div>
  );
};

export default InputModule;
