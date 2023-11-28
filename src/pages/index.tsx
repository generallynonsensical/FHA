// src/pages/index.tsx
import React, { useState } from 'react';
import InputModule from '../containers/InputModule';
import OutputModule from '../containers/OutputModule';

const App: React.FC = () => {
  // State for accordion expansion
  const [isGeneralExpanded, setIsGeneralExpanded] = useState(false);
  const [isTaskExpanded, setIsTaskExpanded] = useState(false);
  const [isHazardExpanded, setIsHazardExpanded] = useState(false);
  const [isControlExpanded, setIsControlExpanded] = useState(false);

  // Toggle functions for accordion
  const toggleGeneral = () => setIsGeneralExpanded(!isGeneralExpanded);
  const toggleTask = () => setIsTaskExpanded(!isTaskExpanded);
  const toggleHazard = () => setIsHazardExpanded(!isHazardExpanded);
  const toggleControl = () => setIsControlExpanded(!isControlExpanded);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic here
  };

  return (
    <div className="flex">
      <div className="w-2/10 p-1">
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

      <div className="w-7/10 p-1">
        <OutputModule />
      </div>
    </div>
  );
};

export default App;
