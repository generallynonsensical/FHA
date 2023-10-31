// src/containers/AccordionContainer.tsx

import React from 'react';
import GeneralInfoAccordion from '../components/GeneralInfoAccordion';
import TaskInfoAccordion from '../components/TaskInfoAccordion';
import HazardInfoAccordion from '../components/HazardInfoAccordion';
import ControlInfoAccordion from '../components/ControlInfoAccordion';

const AccordionContainer: React.FC = () => {
  // Your state management and logic will go here

  return (
    <div className="accordion-container">
      <GeneralInfoAccordion />
      <TaskInfoAccordion />
      <HazardInfoAccordion />
      <ControlInfoAccordion />
    </div>
  );
};

export default AccordionContainer;
