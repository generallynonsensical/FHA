// src/containers/InputModule.tsx

import React, { useState } from 'react';
import TaskModule from '../components/TaskModule';
import HazardModule from '../components/HazardModule';
import ControlModule from '../components/ControlModule';

const InputModule: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="accordion-container">
      <TaskModule expanded={expanded} onToggle={handleToggle} onSubmit={handleSubmit} />
      <HazardModule expanded={expanded} onToggle={handleToggle} onSubmit={handleSubmit} />
      <ControlModule expanded={expanded} onToggle={handleToggle} onSubmit={handleSubmit}/>
    </div>
  );
};

export default InputModule;