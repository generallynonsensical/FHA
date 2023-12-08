import React, { useState, useEffect, ReactElement } from 'react';
import AccordionModule from '../parts/Accordion';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


interface FieldError {
  error: boolean;
  helperText: string;
}

interface ControlModuleProps {
  expanded: boolean;
  onSubmit: (data: any, module: string) => void;
  onOpenHazard: () => void;
  onOpenTask: () => void; 
}

interface FieldErrors {
  [key: string]: FieldError;
}

const ControlModule: React.FC<ControlModuleProps> = ({ expanded, onSubmit, onOpenHazard, onOpenTask }): ReactElement => {
  const [controlName, setControlName] = useState('');
  const [controlType, setControlType] = useState('');
  const [postLikelihood, setPostLikelihood] = useState('');
  const [postExposure, setPostExposure] = useState('');
  const [postConsequence, setPostConsequence] = useState('');

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
  
    setFieldErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: { error: !isValid, helperText: helperText },
    }));
  
    if (callback) {
      callback(isValid);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | { value: unknown }>, setState: React.Dispatch<React.SetStateAction<string>>, fieldName: string) => {
    const newValue = event.target.value as string;
    setState(newValue);
    validateField(fieldName, newValue);
  };
  
  const handleToggleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newState: string, setState: React.Dispatch<React.SetStateAction<string>>, fieldName: string) => {
    setState(newState);
    validateField(fieldName, newState);
  };

  const handleControlNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event, setControlName, 'controlName');
  };
  
  const handleControlTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleInputChange(event, setControlType, 'controlType');
  };
  
  const handlePostLikelihoodChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newState: string) => {
    handleToggleChange(event, newState, setPostLikelihood, 'postLikelihood');
  };
  
  const handlePostExposureChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newState: string) => {
    handleToggleChange(event, newState, setPostExposure, 'postExposure');
  };
  
  const handlePostConsequenceChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, newState: string) => {
    handleToggleChange(event, newState, setPostConsequence, 'postConsequence');
  };

  const resetForm = () => {
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
      title="Control Information"
      onSubmit={(event) => {
        event.preventDefault(); // Prevent default form submission
        const state = { controlName, controlType, postLikelihood, postExposure, postConsequence };
        onSubmit(state, 'controlModule'); // Use the onSubmit prop for submission
      }}
      buttonLabel="Submit Control"
      expanded={expanded}
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

      <Button variant="contained" color="primary" onClick={onOpenHazard} style={{ margin: '10px 0' }}>
        Rate New Hazard
      </Button>
      
      <Button variant="contained" color="primary" onClick={onOpenTask} style={{ margin: '10px 0' }}>
        Rate New Task
      </Button>
    </AccordionModule>
  );
};;

export default ControlModule;