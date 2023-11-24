import React, { useState, useEffect } from 'react';
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
  onSubmit: (data: any, module: string) => void;
}

const TaskModule: React.FC<TaskModuleProps> = ({ expanded, onToggle, onSubmit }) => {
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
  const handleAccordionChange = () => {
    onToggle(); 
    };
    useEffect(() => {
    console.log("Field errors updated:", fieldErrors);
  }, [fieldErrors]);

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
