import React, { Dispatch, SetStateAction } from 'react';
import GeneralModule from '@/components/input/General';
import TaskModule from '@/components/input/Task';
import HazardModule from '@/components/input/Hazard';
import ControlModule from '@/components/input/Control';

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
  handleSubmit: (data: any, module: string) => void;
}


const InputModule: React.FC<InputModuleProps> = ({
  isGeneralAccordionExpanded,
  setIsGeneralAccordionExpanded, // Add this line
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
        onSubmit={(data) => {
          handleSubmit(data, 'generalModule');
          setIsGeneralAccordionExpanded(!isGeneralAccordionExpanded);
        }}
      />

      <TaskModule 
        expanded={isTaskAccordionExpanded}
        onSubmit={(data) => {
          handleSubmit(data, 'taskModule');
          setIsTaskAccordionExpanded(!isTaskAccordionExpanded);
        }}
      />

      <HazardModule 
        expanded={isHazardAccordionExpanded}
        onSubmit={(data) => {
          handleSubmit(data, 'hazardModule');
          setIsHazardAccordionExpanded(!isHazardAccordionExpanded);
        }}
      />

      <ControlModule 
        expanded={isControlAccordionExpanded}
        onSubmit={(data) => {
          handleSubmit(data, 'controlModule');
          setIsControlAccordionExpanded(!isControlAccordionExpanded);
        }}
        onOpenHazard={() => setIsHazardAccordionExpanded(true)}
        onOpenTask={() => setIsTaskAccordionExpanded(true)}
      />
    </div>
  );
};

export default InputModule;