import React, { useState } from 'react';
import InputModule from '../containers/InputModule';
import OutputModule from '../containers/OutputModule';

// Define the main App component
const App: React.FC = () => {
  // State variables for accordion expansion
  const [isGeneralExpanded, setIsGeneralExpanded] = useState(false);
  const [isTaskExpanded, setIsTaskExpanded] = useState(false);
  const [isHazardExpanded, setIsHazardExpanded] = useState(false);
  const [isControlExpanded, setIsControlExpanded] = useState(false);

  // Function to toggle the general accordion
  const toggleGeneral = () => setIsGeneralExpanded(!isGeneralExpanded);

  // Function to toggle the task accordion
  const toggleTask = () => setIsTaskExpanded(!isTaskExpanded);

  // Function to toggle the hazard accordion
  const toggleHazard = () => setIsHazardExpanded(!isHazardExpanded);

  // Function to toggle the control accordion
  const toggleControl = () => setIsControlExpanded(!isControlExpanded);

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
          isGeneralExpanded={isGeneralExpanded}
          isTaskExpanded={isTaskExpanded}
          isHazardExpanded={isHazardExpanded}
          isControlExpanded={isControlExpanded}
          toggleGeneral={toggleGeneral}
          toggleTask={toggleTask}
          toggleHazard={toggleHazard}
          toggleControl={toggleControl}
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
