import React, { useState } from 'react';
import InputModule from '../containers/InputModule';

const DataController: React.FC = () => {
    const [isGeneralAccordionExpanded, setGeneralAccordionExpanded] = useState(true);
    const [isTaskAccordionExpanded, setTaskAccordionExpanded] = useState(false);
    const [isHazardAccordionExpanded, setHazardAccordionExpanded] = useState(false);
    const [isControlAccordionExpanded, setControlAccordionExpanded] = useState(false);
  
    const handleSubmit = (module: string) => {
      console.log('Handling form submission for module:', module);

      switch (module) {
        case 'generalModule':
          setGeneralAccordionExpanded(false);
          setTaskAccordionExpanded(true);
          break;

        case 'taskModule':
          setTaskAccordionExpanded(false);
          setHazardAccordionExpanded(true);
          break;

        case 'hazardModule':
          setHazardAccordionExpanded(false);
          setControlAccordionExpanded(true);
          break;

        case 'controlModule':
          // For the control module, you might want to handle the different options (add another control, rate a new hazard, rate a new task) separately.
          // For now, I'll just collapse the control accordion.
          setControlAccordionExpanded(false);
          break;

        default:
          console.log("Unknown module");
          break;
      }
    };
  
    return (
      <InputModule 
        isGeneralAccordionExpanded={isGeneralAccordionExpanded}
        setIsGeneralAccordionExpanded={setGeneralAccordionExpanded}
        isTaskAccordionExpanded={isTaskAccordionExpanded}
        setIsTaskAccordionExpanded={setTaskAccordionExpanded}
        isHazardAccordionExpanded={isHazardAccordionExpanded}
        setIsHazardAccordionExpanded={setHazardAccordionExpanded}
        isControlAccordionExpanded={isControlAccordionExpanded}
        setIsControlAccordionExpanded={setControlAccordionExpanded}
        handleSubmit={handleSubmit}
      />
    );
  };
  
  export default DataController;
  