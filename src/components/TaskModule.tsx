import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from './AccordionModule';
import TextField from '@mui/material/TextField';

interface FieldError {
  error: boolean;
  helperText: string;
}

interface FieldErrors {
  [key: string]: FieldError;
}

// Define the props type for TaskModule
interface TaskModuleProps {
    expanded: boolean;
    onToggle: () => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const TaskModule: React.FC<TaskModuleProps> = ({ expanded, onToggle}): ReactElement => {
  const [taskName, setTaskName] = useState('');
  
  
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    taskName: { error: false, helperText: '' },
  });

  const validateField = (value: string): boolean => {
    const isValid = value.trim() !== '';
    const helperText = isValid ? '' : '*Required';
    
    setFieldErrors({
      taskName: { error: !isValid, helperText: helperText },
    });

    return isValid;
  };

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTaskName(newValue);
    validateField(newValue);
  };

  const resetForm = () => {
    setTaskName('');
    setFieldErrors({ taskName: { error: false, helperText: '' } });
  };

  const performFormSubmission = () => {
    const isTaskNameValid = validateField(taskName);

    if (isTaskNameValid) {
      console.log("Submitting form with Task Name:", taskName);
      // Form submission logic specific to TaskModule here...
      resetForm();
    }
  };

  const handleAccordionChange = () => {
    onToggle(); // This should work if onToggle is correctly passed as a function
    };
    useEffect(() => {
    console.log("Field errors updated:", fieldErrors);
  }, [fieldErrors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    performFormSubmission();
  };

  return (
    <AccordionModule
      title="Task Information"
      onSubmit={handleSubmit}
      buttonLabel="Submit Task"
      expanded={expanded}
      onChange={onToggle}
      fieldErrors={fieldErrors}
    >
      {/* Removed form tags here */}
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
      {/* ... other form elements */}
    </AccordionModule>
  );
}

export default TaskModule;
