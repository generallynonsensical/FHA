import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from './AccordionModule';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

interface FieldError {
  error: boolean;
  helperText: string;
}

const getFieldValue = (fieldName: string, state: any) => {
  switch (fieldName) {
    case 'hazardName':
      return state.hazardName;
    case 'hazardType':
      return state.hazardType;
    case 'preLikelihood':
      return state.preLikelihood;
    case 'preExposure':
      return state.preExposure;
    case 'preConsequence':
      return state.preConsequence;
    default:
      return '';
  }
};

const HazardModule: React.FC = (): ReactElement => {
  const [hazardName, setHazardName] = useState('');
  const [hazardType, setHazardType] = useState('');
  const [preLikelihood, setPreLikelihood] = useState('');
  const [preExposure, setPreExposure] = useState('');
  const [preConsequence, setPreConsequence] = useState('');
  const [expanded, setExpanded] = useState(false);

  interface FieldErrors {
    [key: string]: FieldError;
  }

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    hazardName: { error: false, helperText: '' },
    hazardType: { error: false, helperText: '' },
    preLikelihood: { error: false, helperText: '' },
    preExposure: { error: false, helperText: '' },
    preConsequence: { error: false, helperText: '' },
  });

  const validateField = (fieldName: string, value: string | null, callback?: (isValid: boolean) => void): void => {
    let isValid = true;
    let helperText = '';

    console.log(`Validating field: ${fieldName} with value: ${value}`);

    switch (fieldName) {
      case 'hazardName':
      case 'hazardType':
      case 'preLikelihood':
      case 'preExposure':
      case 'preConsequence':
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

  const handleHazardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setHazardName(newValue);
    validateField('hazardName', newValue);
  };

  const handleHazardTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newValue = event.target.value as string;
    setHazardType(newValue);
    validateField('hazardType', newValue);
  };

  const handlePreLikelihoodChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newLikelihood: string) => {
    setPreLikelihood(newLikelihood);
    validateField('likelihood', newLikelihood);
  };


  const handlePreExposureChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newExposure: string) => {
    setPreExposure(newExposure);
    validateField('exposure', newExposure);
  };


  const handlePreConsequenceChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newConsequence: string) => {
    setPreConsequence(newConsequence);
    validateField('consequence', newConsequence);
  };
  
  const resetForm = () => {
    console.log("Resetting form");
    setHazardName('');
    setHazardType('');
    setPreLikelihood('');
    setPreExposure('');
    setPreConsequence('');

  setFieldErrors({
    hazardName: { error: false, helperText: '' },
    hazardType: { error: false, helperText: '' },
    preLikelihood: { error: false, helperText: '' },
    preExposure: { error: false, helperText: '' },
    preConsequence: { error: false, helperText: '' },
  });

  setExpanded(false);
  };

  const performFormSubmission = () => {
    console.log("Submitting form");
    let isFormValid = true;

    const fieldValues = {
      hazardName,
      hazardType,
      preLikelihood,
      preExposure,
      preConsequence
    };

  const fieldsToValidate = ['hazardName', 'hazardType', 'preLikelihood', 'preExposure', 'preConsequence'];
  fieldsToValidate.forEach((fieldName) => {
    const fieldValue = getFieldValue(fieldName, { hazardName, hazardType, preLikelihood, preExposure, preConsequence });
    validateField(fieldName, fieldValue, (isValid) => {
      isFormValid = isFormValid && isValid;
      isFormValid = isFormValid && isValid;
    });
  });

  if (isFormValid) {
    // Form submission logic here...
    // After successful submission, reset the form
    resetForm();
  }
};
  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    console.log("Field errors updated:", fieldErrors);
  }, [fieldErrors]);

  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isFormValid = true;
    const state = { hazardName, hazardType, preLikelihood, preExposure, preConsequence };
  
    const fieldsToValidate = ['hazardName', 'hazardType', 'preLikelihood', 'preExposure', 'preConsequence'];
    fieldsToValidate.forEach((fieldName) => {
      const fieldValue = getFieldValue(fieldName, state);
      validateField(fieldName, fieldValue, (isValid) => {
        isFormValid = isFormValid && isValid;
      });
    });
  
    if (isFormValid) {
      performFormSubmission();
     
    }
  };
  

return (
  <AccordionModule
    title="Hazard Information"
    onSubmit={performFormSubmission} 
    buttonLabel="Submit Hazard"
    expanded={expanded}
    onChange={handleAccordionChange}
    fieldErrors={fieldErrors}
    >
    <form onSubmit={handleSubmit}>
    <TextField
      id="inputHazardName"
      label="Hazard Name"
      variant="outlined"
      fullWidth
      margin="normal"
      value={hazardName}
      onChange={handleHazardNameChange}
      error={fieldErrors.hazardName.error}
      helperText={fieldErrors.hazardName.helperText}
      required
    />

    <TextField
      select
      fullWidth
      margin="normal"
      label="Select Hazard Type"
      value={hazardType}
      onChange={handleHazardTypeChange}
      error={fieldErrors.hazardType.error}
      helperText={fieldErrors.hazardType.helperText}
    >
      <MenuItem value="Health">Health</MenuItem>
      <MenuItem value="Safety">Safety</MenuItem>
    </TextField>

    <FormControl fullWidth margin="normal" error={fieldErrors.preLikelihood.error}>
      <Typography>Likelihood of Occurrence</Typography>
      <ToggleButtonGroup
        value={preLikelihood}
        exclusive
        onChange={handlePreLikelihoodChange}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography variant="caption" color="error">{fieldErrors.preLikelihood.helperText}</Typography>
    </FormControl>

    <FormControl fullWidth margin="normal" error={fieldErrors.preExposure.error}>
      <Typography>Exposure to Hazard</Typography>
      <ToggleButtonGroup
        value={preExposure}
        exclusive
        onChange={handlePreExposureChange}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography variant="caption" color="error">{fieldErrors.preExposure.helperText}</Typography>
    </FormControl>

    <FormControl fullWidth margin="normal" error={fieldErrors.preConsequence.error}>
      <Typography>Consequence of Exposure</Typography>
      <ToggleButtonGroup
        value={preConsequence}
        exclusive
        onChange={handlePreConsequenceChange}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography variant="caption" color="error">{fieldErrors.preConsequence.helperText}</Typography>
    </FormControl>
  </form>
</AccordionModule>
)}


export default HazardModule;
