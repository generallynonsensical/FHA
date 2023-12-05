import React, { useState } from 'react';
import InputModule from '../containers/InputModule';
import OutputModule from '../containers/OutputModule';

// Define the main App component
const App: React.FC = () => {

  // Define the handleSubmit function
  const handleSubmit = (module: string) => {
    // Implementation of what should happen when a form is submitted
    console.log(`Form submitted for module: ${module}`);
    // Add your form submission logic here
  };

  // Render the main component
  return (
    <div className="flex items-stretch">
      <div className="left-side w-1/4 p-1 ml-1">
        <InputModule
          isGeneralAccordionExpanded={true}
          setIsGeneralAccordionExpanded={() => {}}
          isTaskAccordionExpanded={false}
          setIsTaskAccordionExpanded={() => {}}
          isHazardAccordionExpanded={false}
          setIsHazardAccordionExpanded={() => {}}
          isControlAccordionExpanded={false}
          setIsControlAccordionExpanded={() => {}}
          handleSubmit={handleSubmit} 
        />
      </div>

      <div className="right-side w-3/4 p-1 mr-1">
        <OutputModule />
      </div>
    </div>
  );
};

export default App;