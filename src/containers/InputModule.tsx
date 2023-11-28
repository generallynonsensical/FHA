// src/containers/InputModule.tsx
import React, { useState, useEffect, ReactElement } from 'react';
import TaskModule from '@/components/TaskModule';
import HazardModule from '@/components/HazardModule';
import ControlModule from '@/components/ControlModule';
import GeneralModule from '@/components/GeneralModule';

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
      <GeneralModule 
        expanded={isGeneralExpanded} 
        onToggle={toggleGeneral} 
        onSubmit={handleSubmit} 
      />
      <TaskModule 
      expanded={isTaskExpanded} 
      onToggle={toggleTask} 
      onSubmit={handleSubmit} 
      />

      <HazardModule 
      expanded={isHazardExpanded} 
      onToggle={toggleHazard} 
      onSubmit={handleSubmit} 
      />
      
      <ControlModule 
      expanded={isControlExpanded} 
      onToggle={toggleControl} 
      onSubmit={handleSubmit}/>
    </div>
  );
};

export default InputModule;