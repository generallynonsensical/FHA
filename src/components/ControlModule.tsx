import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from './AccordionModule';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';

interface FieldError {
  error: boolean;
  helperText: string;
}


interface ControlModuleProps {
  expanded: boolean;
  onToggle: () => void;
  onSubmit: (data: any, module: string) => void;
}

const getFieldValue = (fieldName: string, state: any) => {
  switch (fieldName) {
    case 'controlName':
      return state.controlName || '';
    case 'controlType':
      return state.controlType || '';
    case 'postLikelihood':
      return state.postLikelihood || 0;
    case 'postExposure':
      return state.postExposure || 0;
    case 'postConsequence':
      return state.postConsequence || 0;
    default:
      return '';
  }
};



const ControlModule: React.FC<ControlModuleProps> = ({ expanded, onToggle }): ReactElement => {
    const [controlName, setControlName] = useState('');
  const [controlType, setControlType] = useState('');
  const [postLikelihood, setPostLikelihood] = useState('');
  const [postExposure, setPostExposure] = useState('');
  const [postConsequence, setPostConsequence] = useState('');
  
  interface FieldErrors {
    [key: string]: FieldError;
  }

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    controlName: { error: false, helperText: '' },
    controlType: { error: false, helperText: '' },
    postLikelihood: { error: false, helperText: '' },
    postExposure: { error: false, helperText: '' },
    postConsequence: { error: false, helperText: '' },
  });

  const validateField = (fieldName: string, value: string | null, callback?: (isValid: boolean) => void): void => {
    let isValid = true;
    let helperText = '';

    console.log(`Validating field: ${fieldName} with value: ${value}`);

    switch (fieldName) {
      case 'controlName':
      case 'controlType':
      case 'postLikelihood':
      case 'postExposure':
      case 'postConsequence':
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
  const handleControlNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setControlName(newValue);
    validateField('controlName', newValue);
  };

  const handleControlTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newValue = event.target.value as string;
    setControlType(newValue);
    validateField('controlType', newValue);
  };

  const handlePostLikelihoodChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newPostLikelihood: string) => {
    setPostLikelihood(newPostLikelihood);
    validateField('postLikelihood', newPostLikelihood);
  };


  const handlePostExposureChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newPostExposure: string) => {
    setPostExposure(newPostExposure);
    validateField('postExposure', newPostExposure);
  };


  const handlePostConsequenceChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newPostConsequence: string) => {
    setPostConsequence(newPostConsequence);
    validateField('postConsequence', newPostConsequence);
  };

  const resetForm = () => {
    console.log("Resetting form");
    setControlName('');
    setControlType('');
    setPostLikelihood('');
    setPostExposure('');
    setPostConsequence('');

  setFieldErrors({
    controlName: { error: false, helperText: '' },
    controlType: { error: false, helperText: '' },
    postLikelihood: { error: false, helperText: '' },
    postExposure: { error: false, helperText: '' },
    postConsequence: { error: false, helperText: '' },
  });


  };

  const performFormSubmission = () => {
    console.log("Submitting form");
    let isFormValid = true;
  
    const fieldValues = {
      controlName,
      controlType,
      postLikelihood,
      postExposure,
      postConsequence
    };
  
    const fieldsToValidate = ['controlName', 'controlType', 'postLikelihood', 'postExposure', 'postConsequence'];
    fieldsToValidate.forEach((fieldName) => {
      const fieldValue = getFieldValue(fieldName, { controlName, controlType, postLikelihood, postExposure, postConsequence });
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
    let isFormValid = true;
    const state = { controlName, controlType, postLikelihood, postExposure, postConsequence };
  
    const fieldsToValidate = ['controlName', 'controlType', 'postLikelihood', 'postExposure', 'postConsequence'];
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
    title="Control Information"
    onSubmit={handleSubmit} 
    buttonLabel="Submit Control"
    expanded={expanded}
    onChange={handleAccordionChange}
    fieldErrors={fieldErrors}
    >
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

    <TextField
      select
      fullWidth
      margin="normal"
      label="Select Control Type"
      value={controlType}
      onChange={handleControlTypeChange}
      error={fieldErrors.controlType.error}
      helperText={fieldErrors.controlType.helperText}
    >
      <MenuItem value="Elimination">Elimination</MenuItem>
      <MenuItem value="Substitution">Substitution</MenuItem>
      <MenuItem value="Engineering">Engineering</MenuItem>
      <MenuItem value="Administrative">Administrative</MenuItem>
      <MenuItem value="Personal Protective Equipment">PPE</MenuItem>
      
    </TextField>

      <FormControl fullWidth margin="normal" error={fieldErrors.postLikelihood.error}>
      <Typography>Likelihood of Occurrence</Typography>
      <ToggleButtonGroup
        value={postLikelihood}
        exclusive
        onChange={handlePostLikelihoodChange}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography variant="caption" color="error">{fieldErrors.postLikelihood.helperText}</Typography>
    </FormControl>
      

      <FormControl fullWidth margin="normal" error={fieldErrors.postExposure.error}>
        <Typography>Exposure to Control</Typography>
        <ToggleButtonGroup
          value={postExposure}
          exclusive
          onChange={handlePostExposureChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Typography variant="caption" color="error">{fieldErrors.postExposure.helperText}</Typography>
      </FormControl>
    
      <FormControl fullWidth margin="normal" error={fieldErrors.postConsequence.error}>
        <Typography>Consequence of Exposure</Typography>
        <ToggleButtonGroup
          value={postConsequence}
          exclusive
          onChange={handlePostConsequenceChange}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <ToggleButton key={num} value={String(num)}>{num}</ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Typography variant="caption" color="error">{fieldErrors.postConsequence.helperText}</Typography>
      </FormControl>

  </AccordionModule>
)};

export default ControlModule;
