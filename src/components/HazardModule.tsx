import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from './AccordionModule';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
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
    case 'likelihood':
      return state.likelihood;
    case 'exposure':
      return state.exposure;
    case 'consequence':
      return state.consequence;
    default:
      return '';
  }
};

const HazardModule: React.FC = (): ReactElement => {
  const [hazardName, setHazardName] = useState('');
  const [hazardType, setHazardType] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [exposure, setExposure] = useState('');
  const [consequence, setConsequence] = useState('');
  const [expanded, setExpanded] = useState(false);

  interface FieldErrors {
    [key: string]: FieldError;
  }

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    hazardName: { error: false, helperText: '' },
    hazardType: { error: false, helperText: '' },
    likelihood: { error: false, helperText: '' },
    exposure: { error: false, helperText: '' },
    consequence: { error: false, helperText: '' },
  });

  const validateField = (fieldName: string, value: string, callback?: (isValid: boolean) => void): void => {
    let isValid = true;
    let helperText = '';

    console.log(`Validating field: ${fieldName} with value: ${value}`);

    switch (fieldName) {
      case 'hazardName':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Hazard name is required';
        break;
      case 'hazardType':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Hazard type is required';
        break;
      case 'likelihood':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Likelihood is required';
        break;
      case 'exposure':
          isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Exposure is required';
        break;
      case 'consequence':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Consequence is required';
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

  const handleHazardTypeChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value; 
    setHazardType(newValue);
    validateField('hazardType', newValue);
  };

  const handleLikelihoodChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newLikelihood: string) => {
    setLikelihood(newLikelihood);
    validateField('likelihood', newLikelihood);
  };


  const handleExposureChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newExposure: string) => {
    setExposure(newExposure);
    validateField('exposure', newExposure);
  };


  const handleConsequenceChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newConsequence: string) => {
    setConsequence(newConsequence);
    validateField('consequence', newConsequence);
  };
  
  const resetForm = () => {
    console.log("Resetting form");
    setHazardName('');
    setHazardType('');
    setLikelihood('');
    setExposure('');
    setConsequence('');

  setFieldErrors({
    hazardName: { error: false, helperText: '' },
    hazardType: { error: false, helperText: '' },
    likelihood: { error: false, helperText: '' },
    exposure: { error: false, helperText: '' },
    consequence: { error: false, helperText: '' },
  });

  setExpanded(false);
  };

const performFormSubmission = () => {
  console.log("Submitting form");
  let isFormValid = true;

  const fieldValues = {
    hazardName,
    hazardType,
    likelihood,
    exposure,
    consequence
  };

  const fieldsToValidate = ['hazardName', 'hazardType', 'likelihood', 'exposure', 'consequence'];
  fieldsToValidate.forEach((fieldName) => {
    const fieldValue = getFieldValue(fieldName, { hazardName, hazardType, likelihood, exposure, consequence });
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
    const state = { hazardName, hazardType, likelihood, exposure, consequence };
  
    const fieldsToValidate = ['hazardName', 'hazardType', 'likelihood', 'exposure', 'consequence'];
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

    <FormControl fullWidth margin="normal" error={fieldErrors.hazardType.error}>
      <Select
        id="inputHazardType"
        value={hazardType}
        onChange={handleHazardTypeChange}
        displayEmpty
      >
        <MenuItem value="Please Select"><em>Please Select</em></MenuItem>
        <MenuItem value="Health">Health</MenuItem>
        <MenuItem value="Safety">Safety</MenuItem>
      </Select>
      <FormHelperText>{fieldErrors.hazardType.helperText}</FormHelperText>
    </FormControl>

    <FormControl fullWidth margin="normal" error={fieldErrors.likelihood.error}>
      <Typography>Likelihood of Occurrence</Typography>
      <ToggleButtonGroup
        value={likelihood}
        exclusive
        onChange={handleLikelihoodChange}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography variant="caption" color="error">{fieldErrors.likelihood.helperText}</Typography>
    </FormControl>

    <FormControl fullWidth margin="normal" error={fieldErrors.exposure.error}>
      <Typography>Exposure to Hazard</Typography>
      <ToggleButtonGroup
        value={exposure}
        exclusive
        onChange={handleExposureChange}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography variant="caption" color="error">{fieldErrors.exposure.helperText}</Typography>
    </FormControl>

    <FormControl fullWidth margin="normal" error={fieldErrors.consequence.error}>
      <Typography>Consequence of Exposure</Typography>
      <ToggleButtonGroup
        value={consequence}
        exclusive
        onChange={handleConsequenceChange}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography variant="caption" color="error">{fieldErrors.consequence.helperText}</Typography>
    </FormControl>
  </form>
</AccordionModule>
)}


export default HazardModule;
