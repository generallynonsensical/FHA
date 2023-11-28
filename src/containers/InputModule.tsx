import React from 'react';
import TaskModule from '@/components/TaskModule';
import HazardModule from '@/components/HazardModule';
import ControlModule from '@/components/ControlModule';
import GeneralModule from '@/components/GeneralModule';

// Define the props type for InputModule
interface InputModuleProps {
  isGeneralExpanded: boolean;
  isTaskExpanded: boolean;
  isHazardExpanded: boolean;
  isControlExpanded: boolean;
  toggleGeneral: () => void;
  toggleTask: () => void;
  toggleHazard: () => void;
  toggleControl: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// InputModule component
const InputModule: React.FC<InputModuleProps> = ({
  isGeneralExpanded,
  isTaskExpanded,
  isHazardExpanded,
  isControlExpanded,
  toggleGeneral,
  toggleTask,
  toggleHazard,
  toggleControl,
  handleSubmit
}) => {
  return (
    <div className="accordion-container">
      {/* Render the GeneralModule */}
      <GeneralModule 
        expanded={isGeneralExpanded} 
        onToggle={toggleGeneral} 
        onSubmit={handleSubmit} 
      />
      
      {/* Render the TaskModule */}
      <TaskModule 
        expanded={isTaskExpanded} 
        onToggle={toggleTask} 
        onSubmit={handleSubmit} 
      />

      {/* Render the HazardModule */}
      <HazardModule 
        expanded={isHazardExpanded} 
        onToggle={toggleHazard} 
        onSubmit={handleSubmit} 
      />
      
      {/* Render the ControlModule */}
      <ControlModule 
        expanded={isControlExpanded} 
        onToggle={toggleControl} 
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default InputModule;
