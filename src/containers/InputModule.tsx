import React, { Dispatch, SetStateAction } from 'react';
import GeneralModule from '@/components/GeneralModule';
import TaskModule from '@/components/TaskModule';
import HazardModule from '@/components/HazardModule';
import ControlModule from '@/components/ControlModule';

// Define the props type for InputModule
interface InputModuleProps {
  isGeneralAccordionExpanded: boolean;
  setIsGeneralAccordionExpanded: Dispatch<SetStateAction<boolean>>;
  isTaskAccordionExpanded: boolean;
  setIsTaskAccordionExpanded: Dispatch<SetStateAction<boolean>>;
  isHazardAccordionExpanded: boolean;
  setIsHazardAccordionExpanded: Dispatch<SetStateAction<boolean>>;
  isControlAccordionExpanded: boolean;
  setIsControlAccordionExpanded: Dispatch<SetStateAction<boolean>>;
  handleSubmit: (module: string) => void;

}


// InputModule component
const InputModule: React.FC<InputModuleProps> = ({
  isGeneralAccordionExpanded,
  setIsGeneralAccordionExpanded,
  isTaskAccordionExpanded,
  setIsTaskAccordionExpanded,
  isHazardAccordionExpanded,
  setIsHazardAccordionExpanded,
  isControlAccordionExpanded,
  setIsControlAccordionExpanded,
  handleSubmit,
}) => {


  
  return (
    <div className="accordion-container">
      {/* Render the GeneralModule */}
      <GeneralModule 
        expanded={isGeneralAccordionExpanded} 
        onSubmit={() => handleSubmit('generalModule')}
      />
      
      {/* Render the TaskModule */}
      <TaskModule 
        expanded={isTaskAccordionExpanded} 
        onSubmit={() => handleSubmit('taskModule')}
      />
      {/* Render the HazardModule */}
      <HazardModule 
        expanded={isHazardAccordionExpanded} 
        onSubmit={() => handleSubmit('hazardModule')}
      />
      {/* Render the ControlModule */}
      <ControlModule 
        expanded={isControlAccordionExpanded} 

        onSubmit={() => handleSubmit('controlModule')}
        onOpenHazard={() => setIsHazardAccordionExpanded(true)}
        onOpenTask={() => setIsTaskAccordionExpanded(true)}
      />
    </div>
  );
};

export default InputModule;