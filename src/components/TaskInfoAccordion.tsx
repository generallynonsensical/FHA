// src/components/TaskInfoAccordion.tsx

import React from 'react';

const TaskInfoAccordion: React.FC = () => {
  return (
    <div className="accordion task-info-accordion">
      <h2>Task Information</h2>

      <div className="accordion-content">
        <label htmlFor="inputTask">Task Name</label>
        <input type="text" id="inputTask" name="taskName" />

        <button id="taskSubmitButton">Submit Task</button>
      </div>
    </div>
  );
};

export default TaskInfoAccordion;
