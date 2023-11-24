// src/containers/InputModule.tsx

import React from 'react';
import TaskModule from '../components/TaskModule';
import HazardModule from '../components/HazardModule';
import ControlModule from '../components/ControlModule';

interface InputModuleProps {
  isTaskExpanded: boolean;
  isHazardExpanded: boolean;
  isControlExpanded: boolean;
  toggleTask: () => void;
  toggleHazard: () => void;
  toggleControl: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const InputModule: React.FC<InputModuleProps> = ({ isTaskExpanded, isHazardExpanded, isControlExpanded, toggleTask, toggleHazard, toggleControl, handleSubmit }) => {
  return (
    <div className="accordion-container">
      <TaskModule expanded={isTaskExpanded} onToggle={toggleTask} onSubmit={handleSubmit} />
      <HazardModule expanded={isHazardExpanded} onToggle={toggleHazard} onSubmit={handleSubmit} />
      <ControlModule expanded={isControlExpanded} onToggle={toggleControl} onSubmit={handleSubmit}/>
    </div>
  );
};

export default InputModule;