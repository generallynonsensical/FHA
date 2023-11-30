import React from 'react';
import GeneralModule from '@/components/GeneralModule';
import TaskModule from '@/components/TaskModule';
import HazardModule from '@/components/HazardModule';
import ControlModule from '@/components/ControlModule';


// Define the props type for InputModule
interface InputModuleProps {
  isGeneralAccordionExpanded: boolean;
  isTaskAccordionExpanded: boolean;
  isHazardAccordionExpanded: boolean;
  isControlAccordionExpanded: boolean;
  toggleGeneralAccordion: () => void;
  toggleTaskAccordion: () => void;
  toggleHazardAccordion: () => void;
  toggleControlAccordion: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// InputModule component
const InputModule: React.FC<InputModuleProps> = ({
  isGeneralAccordionExpanded,
  isTaskAccordionExpanded,
  isHazardAccordionExpanded,
  isControlAccordionExpanded,
  toggleGeneralAccordion,
  toggleTaskAccordion,
  toggleHazardAccordion,
  toggleControlAccordion,
  handleSubmit
}) => {
  return (
    <div className="accordion-container">
      {/* Render the GeneralModule */}
      <GeneralModule 
        expanded={isGeneralAccordionExpanded} 
        onToggle={(toggleGeneralAccordion)} 
        onSubmit={handleSubmit} 
      />
      
      {/* Render the TaskModule */}
      <TaskModule 
        expanded={isTaskAccordionExpanded} 
        onToggle={toggleTaskAccordion} 
        onSubmit={handleSubmit} 
      />

      {/* Render the HazardModule */}
      <HazardModule 
        expanded={isHazardAccordionExpanded} 
        onToggle={toggleHazardAccordion} 
        onSubmit={handleSubmit} 
      />
      
      {/* Render the ControlModule */}
      <ControlModule 
        expanded={isControlAccordionExpanded} 
        onToggle={toggleControlAccordion} 
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default InputModule;
