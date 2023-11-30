import React, { useState } from 'react';
import InputModule from '../containers/InputModule';
import OutputModule from '../containers/OutputModule';

// Define the main App component
const App: React.FC = () => {
  // State variables for accordion expansion
  const [isGeneralAccordionExpanded, setIsGeneralAccordionExpanded] = useState(true);
  const [isTaskAccordionExpanded, setIsTaskExpanded] = useState(false);
  const [isHazardAccordionExpanded, setIsHazardExpanded] = useState(false);
  const [isControlAccordionExpanded, setIsControlExpanded] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic goes here
  };

  // Render the main component
  return (
    <div className="flex items-stretch">
      <div className="left-side w-1/4 p-1 ml-1">
      <InputModule
  isGeneralAccordionExpanded={isGeneralAccordionExpanded}
  setIsGeneralAccordionExpanded={setIsGeneralAccordionExpanded}
  isTaskAccordionExpanded={isTaskAccordionExpanded}
  setIsTaskAccordionExpanded={setIsTaskExpanded}
  isHazardAccordionExpanded={isHazardAccordionExpanded}
  setIsHazardAccordionExpanded={setIsHazardExpanded}
  isControlAccordionExpanded={isControlAccordionExpanded}
  setIsControlAccordionExpanded={setIsControlExpanded}
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