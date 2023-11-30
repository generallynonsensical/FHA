import React, { useState, useEffect, ReactElement } from 'react';
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

// Helper function to get a field's value based on its name
const getFieldValue = (fieldName: string, state: any) => {
  switch (fieldName) {
    case 'taskName':
      return state.taskName;

    default:
      return '';
  }
};

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

  // Reset the form
  const resetForm = () => {
    setTaskName('');
    setFieldErrors({ taskName: { error: false, helperText: '' } });
  };

   // useEffect to log field errors when they are updated
  useEffect(() => {
    console.log("Field errors updated:", fieldErrors);
  }, [fieldErrors]);



    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      console.log("Submitting form");
    
      let isFormValid = true;
      const state = { taskName }
    
      const fieldsToValidate = ['taskName'];
      fieldsToValidate.forEach((fieldName) => {
        const fieldValue = getFieldValue(fieldName, state);
        const isValid = validateField(fieldValue);
        isFormValid = isFormValid && isValid;
      });
    
      if (isFormValid) {
        // Form submission logic here...
        onSubmit(state, 'taskModule');
        resetForm();
      }
    };

  return (
    <AccordionModule
      title="Task Information"
      onSubmit={handleSubmit}
      buttonLabel="Submit Task"
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
