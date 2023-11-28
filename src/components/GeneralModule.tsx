import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from './AccordionModule';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


interface FieldError {
  error: boolean;
  helperText: string;
}

interface GeneralModuleProps {
  expanded: boolean;
  onToggle: () => void;
  onSubmit: (data: any, module: string) => void;
  
}


const getFieldValue = (fieldName: string, state: any) => {
  switch (fieldName) {
    case 'createdBy':
      return state.createdBy;
    case 'dateCreated':
      return state.dateCreated ? state.dateCreated.toString() : '';
    case 'companyName':
      return state.companyName;
    case 'positionEvaluated':
      return state.positionEvaluated;
    default:
      return '';
  }
};
const GeneralModule: React.FC<GeneralModuleProps> = ({ expanded, onToggle, onSubmit }): ReactElement => {
  const [createdBy, setCreatedBy] = useState('');
  const [dateCreated, setDateCreated] = useState<Date | null>(new Date());
  const [companyName, setCompanyName] = useState('');
  const [positionEvaluated, setPositionEvaluated] = useState('');

  interface FieldErrors {
    [key: string]: FieldError;
  }

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    createdBy: { error: false, helperText: '' },
    dateCreated: { error: false, helperText: '' },
    companyName: { error: false, helperText: '' },
    positionEvaluated: { error: false, helperText: '' },
  });

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

  const handleCreatedByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCreatedBy(newValue);
    validateField('createdBy', newValue);
  };

  const handleDateCreatedChange = (newValue: Date | null) => {
    setDateCreated(newValue);
    validateField('dateCreated', newValue ? newValue.toString() : null);
  };
  
  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCompanyName(newValue);
    validateField('companyName', newValue);
  };
  
  const handlePositionEvaluatedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setPositionEvaluated(newValue);
    validateField('positionEvaluated', newValue);
  };


    //setErrors(newErrors);
    //return isValid;
    //};

    // Function to handle form submission
    //const handleSubmit = () => {
   //   if (validateFields()) {
        // Form submission logic here
    //  }
   // };

   // Function to toggle Accordion
   //const toggleAccordion = () => {
   // setIsAccordionExpanded(!isAccordionExpanded);
 // };  


  const resetForm = () => {
    console.log("Resetting form");
    setCreatedBy('');
    setDateCreated(null);
    setCompanyName('');
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

  const handleAccordionChange = () => {
    onToggle(); 
    };
    useEffect(() => {
    console.log("Field errors updated:", fieldErrors);
  }, [fieldErrors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting form");
  
    let isFormValid = true;
    const state = { createdBy, dateCreated, companyName, positionEvaluated };
  
    const fieldsToValidate = ['createdBy', 'dateCreated', 'companyName', 'positionEvaluated'];
    fieldsToValidate.forEach((fieldName) => {
      const fieldValue = getFieldValue(fieldName, state);
      validateField(fieldName, fieldValue, (isValid) => {
        isFormValid = isFormValid && isValid;
      });
    });
  
    if (isFormValid) {
      // Form submission logic here...
      resetForm();
    }
  };
  


  return (
    <AccordionModule
      title="General Information"
      onSubmit={handleSubmit}
      buttonLabel="Submit"
      expanded={expanded}
      onChange={onToggle}
      fieldErrors={fieldErrors}
    >
      <TextField
        id="inputCreatedBy"
        label="Created By"
        variant="outlined"
        fullWidth
        margin="normal"
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
          renderInput={(params) => <TextField {...params} />}
      />
      </LocalizationProvider>
      <TextField
        label="Company Name"
        value={companyName}
        onChange={handleCompanyNameChange}
        error={fieldErrors.companyName.error}
        helperText={fieldErrors.companyName.helperText}
      />
      <TextField
        label="Position Being Evaluated"
        value={positionEvaluated}
        onChange={handlePositionEvaluatedChange}
        error={fieldErrors.positionEvaluated.error}
        helperText={fieldErrors.positionEvaluated.helperText}
      />
    </AccordionModule>
  );
};

export default GeneralModule;


