import React, { useState, useEffect } from 'react';
import AccordionModule from './AccordionModule';
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
  onToggle: () => void;
  onSubmit: (data: any, module: string) => void;
}

const TaskModule: React.FC<TaskModuleProps> = ({ expanded, onToggle, onSubmit }) => {
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

  // Reset the form
  const resetForm = () => {
    setTaskName('');
    setFieldErrors({ taskName: { error: false, helperText: '' } });
  };

  // Perform form submission and return whether it's valid
  const performFormSubmission = (): boolean => {
    const isTaskNameValid = validateField(taskName);

    if (isTaskNameValid) {
      console.log("Submitting form with Task Name:", taskName);
      // Form submission logic specific to TaskModule here...
      resetForm();
      return true;
    }
    return false;
  };

  // Handle change for the AccordionModule
  const handleAccordionChange = () => {
    onToggle();
  };

  // useEffect to log field errors when they are updated
  useEffect(() => {
    console.log("Field errors updated:", fieldErrors);
  }, [fieldErrors]);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (performFormSubmission()) {
      onSubmit(taskName, 'task'); // Pass 'task' as the second argument
    }
  };

  return (
    <AccordionModule
      title="Task Information"
      onSubmit={handleSubmit}
      buttonLabel="Submit Task"
      expanded={expanded}
      onChange={handleAccordionChange}
      fieldErrors={fieldErrors}
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
