import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from './AccordionModule';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface FieldError {
  error: boolean;
  helperText: string;
}

const getFieldValue = (fieldName: string, state: any) => {
  switch (fieldName) {
    case 'controlName':
      return state.controlName;
    case 'controlType':
      return state.controlType;
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

const ControlModule: React.FC = () => {
  const [controlName, setControlName] = useState('');
  const [controlType, setControlType] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [exposure, setExposure] = useState('');
  const [consequence, setConsequence] = useState('');
  const [expanded, setExpanded] = useState(false);
  
  interface FieldErrors {
    [key: string]: FieldError;
  }

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    controlName: { error: false, helperText: '' },
    controlType: { error: false, helperText: '' },
    likelihood: { error: false, helperText: '' },
    exposure: { error: false, helperText: '' },
    consequence: { error: false, helperText: '' },
  });

  const validateField = (fieldName: string, value: string, callback?: (isValid: boolean) => void): void => {
    let isValid = true;
    let helperText = '';

    console.log(`Validating field: ${fieldName} with value: ${value}`);

    switch (fieldName) {
      case 'controlName':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Control name is required';
        break;
      case 'controlType':
        isValid = value.trim() !== '';
        helperText = isValid ? '' : 'Control type is required';
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

  const handleControlNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setControlName(newValue);
    validateField('controlName', newValue);
  };

  const handleControlTypeChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value; 
    setControlType(newValue);
    validateField('controlType', newValue);
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
    setControlName('');
    setControlType('');
    setLikelihood('');
    setExposure('');
    setConsequence('');

  setFieldErrors({
    controlName: { error: false, helperText: '' },
    controlType: { error: false, helperText: '' },
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
      controlName,
      controlType,
      likelihood,
      exposure,
      consequence
    };
  
    const fieldsToValidate = ['controlName', 'controlType', 'likelihood', 'exposure', 'consequence'];
    fieldsToValidate.forEach((fieldName) => {
      const fieldValue = getFieldValue(fieldName, { controlName, controlType, likelihood, exposure, consequence });
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
    const state = { controlName, controlType, likelihood, exposure, consequence };
  
    const fieldsToValidate = ['controlName', 'controlType', 'likelihood', 'exposure', 'consequence'];
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

  const [controlNameError, setControlNameError] = useState(false);
  const [controlNameHelperText, setControlNameHelperText] = useState('');
  const [controlTypeError, setControlTypeError] = useState(false);
  const [controlTypeHelperText, setControlTypeHelperText] = useState('');
  const [likelihoodError, setLikelihoodError] = useState(false);
  const [likelihoodHelperText, setLikelihoodHelperText] = useState('');
  const [exposureError, setExposureError] = useState(false);
  const [exposureHelperText, setExposureHelperText] = useState('');
  const [consequenceError, setConsequenceError] = useState(false);
  const [consequenceHelperText, setConsequenceHelperText] = useState('');

  const validateControlName = () => {
    if (!controlName.trim()) {
      setControlNameError(true);
      setControlNameHelperText('Control name is required');
      return false;
    }
    setControlNameError(false);
    setControlNameHelperText('');
    return true;
  };

  const validateControlType = () => {
    if (!controlType) {
      setControlTypeError(true);
      setControlTypeHelperText('Control type is required');
      return false;
    }
    setControlTypeError(false);
    setControlTypeHelperText('');
    return true;
  };

  const validateLikelihood = () => {
    if (!likelihood) {
      setLikelihoodError(true);
      setLikelihoodHelperText('Likelihood rating is required');
      return false;
    }
    setLikelihoodError(false);
    setLikelihoodHelperText('');
    return true;
  };

  const validateExposure = () => {
    if (!exposure) {
      setExposureError(true);
      setExposureHelperText('Exposure rating is required');
      return false;
    }
    setExposureError(false);
    setExposureHelperText('');
    return true;
  };

  const validateConsequence = () => {
    if (!consequence) {
      setConsequenceError(true);
      setConsequenceHelperText('Consequence rating is required');
      return false;
    }
    setConsequenceError(false);
    setConsequenceHelperText('');
    return true;
  };

  const handleChangeControlName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControlName(event.target.value);
  };

  const handleChangeControlType = (event: SelectChangeEvent<string>) => {
    setControlType(event.target.value);
  };

 

return (
  <AccordionModule
    title="Control Information"
    onSubmit={performFormSubmission} 
    buttonLabel="Submit Control"
    expanded={expanded}
    onChange={handleAccordionChange}
    fieldErrors={fieldErrors}
  >
    <form onSubmit={handleSubmit}>
      <TextField
        id="inputControlName"
        label="Control Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={controlName}
        onChange={handleControlNameChange}
        error={fieldErrors.controlName.error}
        helperText={fieldErrors.controlName.helperText}
        required
      />
    
      <FormControl fullWidth margin="normal" error={fieldErrors.controlType.error}>
        <Select
          id="inputControlType"
          value={controlType}
          onChange={handleControlTypeChange}
          displayEmpty
        >
        <MenuItem value="Please Select"><em>Please Select</em></MenuItem>
        <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Safety">Safety</MenuItem>
          </Select>
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
        <Typography>Exposure to Control</Typography>
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
)};

export default ControlModule;
