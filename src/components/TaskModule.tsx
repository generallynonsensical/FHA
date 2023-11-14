import React, { useState, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import AccordionModule from './AccordionModule';

interface FieldError {
  error: boolean;
  helperText: string;
}

const TaskModule: React.FC = (): ReactElement => {
  const [taskName, setTaskName] = useState('');
  const [expanded, setExpanded] = useState(false); 
  const [taskError, setTaskError] = useState<FieldError>({ error: false, helperText: '' });

  const validateTaskName = () => {
    if (taskName.trim() === '') {
      setTaskError({ error: true, helperText: 'Task Name is required' });
    } else {
      setTaskError({ error: false, helperText: '' });
    }
  };

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
    validateTaskName(); 
  };

  const handleSubmit = () => {  
    validateTaskName();
    if (!taskError.error) {
      console.log("Submitted:", taskName);
    }
  };

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  return (
    <AccordionModule
      title="Task Information"
      onSubmit={handleSubmit}
      buttonLabel="Submit Task"
      fieldErrors={{ taskName: taskError }}
      expanded={expanded}
      onChange={handleAccordionChange}
    >
      <TextField
        label="Task Name"
        variant="outlined"
        fullWidth
        value={taskName}
        onChange={handleTaskNameChange}
        error={taskError.error}
        helperText={taskError.helperText}
      />
    </AccordionModule>
  );
};

export default TaskModule;
