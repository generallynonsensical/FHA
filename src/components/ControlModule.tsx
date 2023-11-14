import React, { useState, ReactElement } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl';

const ControlModule: React.FC = () => {
  const [controlName, setControlName] = useState('');
  const [controlType, setControlType] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [exposure, setExposure] = useState('');
  const [consequence, setConsequence] = useState('');

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

  const handleLikelihoodChange = (event: React.MouseEvent<HTMLElement>, newLikelihood: string) => {
    setLikelihood(newLikelihood);
  };

  const handleExposureChange = (event: React.MouseEvent<HTMLElement>, newExposure: string) => {
    setExposure(newExposure);
  };

  const handleConsequenceChange = (event: React.MouseEvent<HTMLElement>, newConsequence: string) => {
    setConsequence(newConsequence);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isControlNameValid = validateControlName();
    const isControlTypeValid = validateControlType();
    const isLikelihoodValid = validateLikelihood();
    const isExposureValid = validateExposure();
    const isConsequenceValid = validateConsequence();

    if (isControlNameValid && isControlTypeValid && isLikelihoodValid && isExposureValid && isConsequenceValid) {
      // Proceed with form submission logic
    }
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md w-full mt-2">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-control-content"
          id="panel-control-header"
        >
          <Typography>Control Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            <TextField
              id="inputControlName"
              label="Control Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={controlName}
              onChange={handleChangeControlName}
              error={controlNameError}
              helperText={controlNameHelperText}
            />
            <FormControl fullWidth margin="normal" error={controlTypeError}>
              <Select
                id="inputControlType"
                value={controlType}
                onChange={handleChangeControlType}
                displayEmpty
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Elimination">Elimination</MenuItem>
                <MenuItem value="Substitution">Substitution</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Administrative">Administrative</MenuItem>
                <MenuItem value="PPE">PPE</MenuItem>
              </Select>
              <Typography variant="caption" color="error">{controlTypeHelperText}</Typography>
            </FormControl>
            <FormControl fullWidth margin="normal" error={likelihoodError}>
              <Typography>Likelihood of Occurrence</Typography>
              <ToggleButtonGroup
                value={likelihood}
                exclusive
                onChange={(event, newLikelihood) => setLikelihood(newLikelihood)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <ToggleButton key={num} value={String(num)}>
                    {num}
                  </ToggleButton>
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
                  <ToggleButton key={num} value={String(num)}>
                    {num}
                  </ToggleButton>
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
                  <ToggleButton key={num} value={String(num)}>
                    {num}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
              <Typography variant="caption" color="error">{consequenceHelperText}</Typography>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit Control
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ControlModule;
