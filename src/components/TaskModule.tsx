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

const TaskModule: React.FC<TaskModuleProps> = ({ expanded, onToggle, onSubmit }): ReactElement => {
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
    onToggle()
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
    onToggle(); // Replace setExpanded with onToggle
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
      onSubmit={onSubmit} // Use the onSubmit prop for form submission
      buttonLabel="Submit Task"
      expanded={expanded} // Use the expanded prop
      onChange={handleAccordionChange}
      fieldErrors={fieldErrors}
    >
      {/* Your form elements here */}
    </AccordionModule>
  )
}

export default TaskModule;