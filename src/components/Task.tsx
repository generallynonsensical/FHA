import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from './Accordion';
import TextField from '@mui/material/TextField';


// Define the interface for field errors
interface FieldError {
  error: boolean;
  helperText: string;
}

// Define the type for field errors using key-value pairs
interface FieldErrors {
  [key: string]: FieldError;
}


// Define the props type for TaskModule
interface TaskModuleProps {
  expanded: boolean;
  onSubmit: (data: any, module: string) => void;
}

const TaskModule: React.FC<TaskModuleProps> = ({ expanded, onSubmit }) => {
  const [taskName, setTaskName] = useState('');

  // Initialize field errors state for taskName
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    taskName: { error: false, helperText: '' },
  });

  // Function to validate the taskName field
  const validateField = (value: string): boolean => {
    const isValid = value.trim() !== '';
    const helperText = isValid ? '' : '*Required';

    setFieldErrors({
      taskName: { error: !isValid, helperText: helperText },
    });

    return isValid;
  };

  // Handle change for the taskName field
  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTaskName(newValue);
    validateField(newValue);
  };

  const resetForm = () => {
    setTaskName('');

  
    setFieldErrors({
     taskName: { error: false, helperText: '' },
      
    });
  };

  useEffect(() => {
    console.log("Field errors updated:", fieldErrors);
  }, [fieldErrors]);

  useEffect(() => {
    if (!expanded) {
      resetForm();
    }
  }, [expanded]);

  useEffect(() => {
    if (expanded) {
      validateField(taskName);
    }
  }, [expanded]);

  return (
    <AccordionModule
      title="Task Information"
      onSubmit={(event) => {
        event.preventDefault(); // Prevent default form submission
        const state = { taskName };
        onSubmit(state, 'taskModule'); // Use the onSubmit prop for submission
      }}
      buttonLabel="Submit"
      expanded={expanded}
    >
      {/* Task Name input field */}
      <TextField
        id="inputTaskName"
        label="Task Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={taskName}
        onChange={handleTaskNameChange}
        error={fieldErrors.taskName.error}
        helperText={fieldErrors.taskName.helperText}
        required
      />
    
    </AccordionModule>
  );
}

export default TaskModule;
