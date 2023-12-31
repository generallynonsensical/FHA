import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from '../parts/Accordion';
import TextField from '@mui/material/TextField';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

// Define an interface for field errors
interface FieldError {
  error: boolean;
  helperText: string;
}

// Define the props for the GeneralModule component
interface GeneralModuleProps {
  expanded: boolean;
  onSubmit: (data: any, module: string) => void;
}


// GeneralModule component
const GeneralModule: React.FC<GeneralModuleProps> = ({ expanded,  onSubmit }): ReactElement => {
  const [createdBy, setCreatedBy] = useState('');
  const [dateCreated, setDateCreated] = useState(dayjs(new Date()));
  const [companyName, setCompanyName] = useState('');
  const [positionEvaluated, setPositionEvaluated] = useState('');

  // Define an interface for field errors
  interface FieldErrors {
    [key: string]: FieldError;
  }

  // Initialize field errors state
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    createdBy: { error: false, helperText: '' },
    dateCreated: { error: false, helperText: '' },
    companyName: { error: false, helperText: '' },
    positionEvaluated: { error: false, helperText: '' },
  });

  // Function to validate a field's value
  const validateField = (fieldName: string, value: string | null, callback?: (isValid: boolean) => void): void => {
    console.log(`Validating field: ${fieldName} with value: ${value}`);

    let isValid = true;
    let helperText = '';

    switch (fieldName) {
      case 'createdBy':
      case 'dateCreated':
      case 'companyName':
      case 'positionEvaluated':
        isValid = typeof value === 'string' && value.trim() !== '';
        helperText = isValid ? '' : '*Required';
        break;
    }

    console.log(`Validation result for ${fieldName}:`, { error: !isValid, helperText });

    setFieldErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: { error: !isValid, helperText: helperText },
    }));

    if (callback) {
      callback(isValid);
    }
  };

  // Handle change for the 'createdBy' field
  const handleCreatedByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCreatedBy(newValue);
    validateField('createdBy', newValue);
  };

  // Handle change for the 'dateCreated' field
  const handleDateCreatedChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setDateCreated(date);
    } else {
      setDateCreated(dayjs(new Date()));
    }
  };

  // Handle change for the 'companyName' field
  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCompanyName(newValue);
    validateField('companyName', newValue);
  };

  // Handle change for the 'positionEvaluated' field
  const handlePositionEvaluatedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPositionEvaluated(newValue);
    validateField('positionEvaluated', newValue);
  };

  const resetForm = () => {
    setCreatedBy('');
    // Do not reset dateCreated
    setCompanyName('');
    setPositionEvaluated('');
  
    setFieldErrors({
      createdBy: { error: false, helperText: '' },
      dateCreated: { error: false, helperText: '' },
      companyName: { error: false, helperText: '' },
      positionEvaluated: { error: false, helperText: '' },
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
 

  
  return (
    <AccordionModule
      title="General Information"
      onSubmit={(event) => {
        event.preventDefault(); // Prevent default form submission
        const state = { createdBy, dateCreated, companyName, positionEvaluated };
        console.log('Submitting form with state:', state); // Add this line

        onSubmit(state, 'generalModule'); // Use the onSubmit prop for submission
        resetForm();
      }}
      buttonLabel="Submit"
      expanded={expanded}
    >
      <TextField
        id="inputCreatedBy"
        label="Created By"
        variant="outlined"
        fullWidth
        margin="normal"
        className="mb-4"
        value={createdBy}
        onChange={handleCreatedByChange}
        error={fieldErrors.createdBy.error}
        helperText={fieldErrors.createdBy.helperText}
        required
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date Created"
          value={dateCreated}
          onChange={handleDateCreatedChange}
          slotProps={{ textField: { variant: 'outlined' } }}
        />
      </LocalizationProvider>

      <TextField
        id="inputCompanyName"
        label="Company Name: "
        variant="outlined"
        fullWidth
        margin="normal"
        value={companyName}
        onChange={handleCompanyNameChange}
        error={fieldErrors.companyName.error}
        helperText={fieldErrors.companyName.helperText}
        required
      />
      <TextField
        id="inputPositionEvaluated"
        label="Position Evaluated: "
        variant="outlined"
        fullWidth
        margin="normal"
        value={positionEvaluated}
        onChange={handlePositionEvaluatedChange}
        error={fieldErrors.positionEvaluated.error}
        helperText={fieldErrors.positionEvaluated.helperText}
        required
      />
    </AccordionModule>
  );
};

export default GeneralModule;
