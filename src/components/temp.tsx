import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl'; 
import AccordionModule from './AccordionModule';
import Typography from '@mui/material/Typography';
import { HelpCenterTwoTone } from '@mui/icons-material';

const HazardModule: React.FC = () => {
  const [hazardName, setHazardName] = useState('');
  const [hazardType, setHazardType] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [exposure, setExposure] = useState('');
  const [consequence, setConsequence] = useState('');
  const [expanded, setExpanded] = useState(false); 

  const [hazardNameError, setHazardNameError] = useState(false);
  const [hazardNameHelperText, setHazardNameHelperText] = useState('');
  const [hazardTypeError, setHazardTypeError] = useState(false);
  const [hazardTypeHelperText, setHazardTypeHelperText] = useState('');
  const [likelihoodError, setLikelihoodError] = useState(false);
  const [likelihoodHelperText, setLikelihoodHelperText] = useState('');
  const [exposureError, setExposureError] = useState(false);
  const [exposureHelperText, setExposureHelperText] = useState('');
  const [consequenceError, setConsequenceError] = useState(false);
  const [consequenceHelperText, setConsequenceHelperText] = useState(''); 


  // Validation functions
  const validateField = (fieldName, value) => {
    let isValid = true;
    let helperText = '';

    switch (fieldName) {
      case 'hazardName':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Hazard name is required';
        setHazardNameError(!isValid);
        setHazardNameHelperText(helperText);
        break;
      case 'hazardType':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Hazard type is required';
        setHazardTypeError(!isValid);
        setHazardTypeHelperText(helperText);
        break;
      case 'likelihood':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Likelihood is required';
        setLikelihoodError(!isValid);
        setLikelihoodHelperText(helperText);
        break;
      case 'exposure':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Exposure is required';
        setExposureError(!isValid);
        setExposureHelperText(helperText);
        break;
      case 'consequence':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Consequence is required';
        setConsequenceError(!isValid);
        setConsequenceHelperText(helperText)
        break;

      
    }

    return isValid;
  };

  // Change handlers
  const handleHazardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHazardName(event.target.value);
    validateField('hazardName', event.target.value);
  };

  const handleHazardTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHazardType(event.target.value);
    validateField('hazardType', event.target.value);
  };

  const handleLikelihoodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLikelihood(event.target.value);
    validateField('likelihood', event.target.value);

  }

  const handleExposureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExposure(event.target.value);
    validateField('exposure', event.target.value);
  }

  const handleConsequenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsequence(event.target.value);
    validateField('consequence', event.target.value);
  }
  
  // Form submission
  const performFormSubmission = () => {
    // Define form submission logic here
  };

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isFormValid = 
      validateField('hazardName', hazardName) &&
      // ... other validations
      ;

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
      error={false}
      helperText=""
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
          error={hazardNameError}
          helperText={hazardNameHelperText}
        />
  
        <FormControl fullWidth margin="normal" error={hazardTypeError}>
          <Select
            id="inputHazardType"
            value={hazardType}
            onChange={(e) => setHazardType(e.target.value)}
            displayEmpty
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Safety">Safety</MenuItem>
          </Select>
          <Typography variant="caption" color="error">{hazardTypeHelperText}</Typography>
        </FormControl>
  
        <FormControl fullWidth margin="normal" error={likelihoodError}>
          <Typography>Likelihood of Occurrence</Typography>
          <ToggleButtonGroup
            value={likelihood}
            exclusive
            onChange={(event, newLikelihood) => setLikelihood(newLikelihood)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Typography variant="caption" color="error">{likelihoodHelperText}</Typography>
        </FormControl>
  
        <FormControl fullWidth margin="normal" error={exposureError}>
          <Typography>Exposure to Hazard</Typography>
          <ToggleButtonGroup
            value={exposure}
            exclusive
            onChange={(event, newExposure) => setExposure(newExposure)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Typography variant="caption" color="error">{exposureHelperText}</Typography>
        </FormControl>
  
        <FormControl fullWidth margin="normal" error={consequenceError}>
          <Typography>Consequence of Exposure</Typography>
          <ToggleButtonGroup
            value={consequence}
            exclusive
            onChange={(event, newConsequence) => setConsequence(newConsequence)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Typography variant="caption" color="error">{consequenceHelperText}</Typography>
        </FormControl>
      </form>
    </AccordionModule>
  );
  