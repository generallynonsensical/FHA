import React, { useState, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText'; // Add this line
import AccordionModule from './AccordionModule';
import Typography from '@mui/material/Typography';

interface FieldError {
  error: boolean;
  helperText: string;
}


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

  // Validation functions
  const validateField = (fieldName: string, value: string, callback?: (isValid: boolean) => void): void => {
    let isValid = true;
    let helperText = '';

    switch (fieldName) {
      case 'hazardName':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Hazard name is required';
        setFieldErrors(prevErrors => ({
          ...prevErrors,
          hazardName: { error: !isValid, helperText: helperText },
        }));
        break;
      case 'hazardType':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Hazard type is required';
        setFieldErrors(prevErrors => ({
          ...prevErrors,
          hazardType: { error: !isValid, helperText: helperText },
        }));
        break;
      case 'likelihood':
        setFieldErrors(prevErrors => ({
          ...prevErrors,
          likelihood: { error: !isValid, helperText: helperText },
        }));
        break;
      case 'exposure':
        setFieldErrors(prevErrors => ({
          ...prevErrors,
          exposure: { error: !isValid, helperText: helperText },
        }));
        break;
      case 'consequence':
        setFieldErrors(prevErrors => ({
          ...prevErrors,
          consequence: { error: !isValid, helperText: helperText },
        }));
        break;
      
    }
  
    setFieldErrors(prevErrors => {
      const updatedErrors = {
        ...prevErrors,
        [fieldName]: { error: !isValid, helperText: helperText },
      };
      if (callback) {
        callback(isValid);
      }
      return updatedErrors;
    });
  };
  

  // Change handlers
  const handleHazardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHazardName(event.target.value);
    validateField('hazardName', event.target.value);
  };

  const handleHazardTypeChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value; // The value is already a string, no need to cast
    setHazardType(value);
    validateField('hazardType', value);
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
  

  const performFormSubmission = () => {
  // Define form submission logic here
  };

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isFormValid = true;
  
    // Validate all fields and update isFormValid accordingly
    const fieldsToValidate = ['hazardName', 'hazardType', 'likelihood', 'exposure', 'consequence'];
    fieldsToValidate.forEach((fieldName) => {
      validateField(fieldName, fieldErrors[fieldName].helperText, (isValid) => {
        isFormValid = isFormValid && isValid;
      });
    });
  
    // Check if all validations passed before submitting the form
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
