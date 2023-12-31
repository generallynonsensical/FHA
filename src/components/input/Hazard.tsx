import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from '../parts/Accordion';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

// Define an interface for field errors
interface FieldError {
  error: boolean;
  helperText: string;
}

// Define the props type for HazardModule
interface HazardModuleProps {
  expanded: boolean;
  onSubmit: (data: any, module: string) => void;
}


// HazardModule component
const HazardModule: React.FC<HazardModuleProps> = ({ expanded, onSubmit }): ReactElement => {
  const [hazardName, setHazardName] = useState('');
  const [hazardType, setHazardType] = useState('');
  const [preLikelihood, setPreLikelihood] = useState('');
  const [preExposure, setPreExposure] = useState('');
  const [preConsequence, setPreConsequence] = useState('');

  // Define an interface for field errors
  interface FieldErrors {
    [key: string]: FieldError;
  }

  // Initialize field errors state
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    hazardName: { error: false, helperText: '' },
    hazardType: { error: false, helperText: '' },
    preLikelihood: { error: false, helperText: '' },
    preExposure: { error: false, helperText: '' },
    preConsequence: { error: false, helperText: '' },
  });

  // Function to validate a field's value
  const validateField = (fieldName: string, value: string | null, callback?: (isValid: boolean) => void): void => {
    console.log(`Validating field: ${fieldName} with value: ${value}`);

    let isValid = true;
    let helperText = '';

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

  // Handle change for the 'hazardName' field
  const handleHazardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setHazardName(newValue);
    validateField('hazardName', newValue);
  };

  // Handle change for the 'hazardType' field
  const handleHazardTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newValue = event.target.value as string;
    setHazardType(newValue);
    validateField('hazardType', newValue);
  };

  // Handle change for the 'preLikelihood' field
  const handlePreLikelihoodChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newPreLikelihood: string) => {
    setPreLikelihood(newPreLikelihood);
    validateField('preLikelihood', newPreLikelihood);
  };

  // Handle change for the 'preExposure' field
  const handlePreExposureChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newPreExposure: string) => {
    setPreExposure(newPreExposure);
    validateField('preExposure', newPreExposure);
  };

  // Handle change for the 'preConsequence' field
  const handlePreConsequenceChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newPreConsequence: string) => {
    setPreConsequence(newPreConsequence);
    validateField('preConsequence', newPreConsequence);
  };

  const resetForm = () => {
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
      title="Hazard Information"
      onSubmit={(event) => {
        event.preventDefault(); // Prevent default form submission
        const state = { hazardName, hazardType, preLikelihood, preExposure, preConsequence };
        onSubmit(state, 'hazardModule'); // Use the onSubmit prop for submission
      }}
      buttonLabel="Submit Hazard"
      expanded={expanded}

    >
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

    </AccordionModule>
  );
};

export default HazardModule;