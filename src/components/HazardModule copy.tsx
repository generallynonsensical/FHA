import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import FormControl from '@mui/material/FormControl'; 

const HazardModule: React.FC = () => {
  const [hazardName, setHazardName] = useState('');
  const [hazardType, setHazardType] = useState('');
  const [likelihood, setLikelihood] = useState('');
  const [exposure, setExposure] = useState('');
  const [consequence, setConsequence] = useState('');

  // Error state and helper text for each field
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

  const validateHazardName = () => {
    if (!hazardName.trim()) {
      setHazardNameError(true);
      setHazardNameHelperText('Hazard name is required');
      return false;
    }
    setHazardNameError(false);
    setHazardNameHelperText('');
    return true;
  };

  const validateHazardType = () => {
    if (!hazardType) {
      setHazardTypeError(true);
      setHazardTypeHelperText('Hazard type is required');
      return false;
    }
    setHazardTypeError(false);
    setHazardTypeHelperText('');
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isHazardNameValid = validateHazardName();
    const isHazardTypeValid = validateHazardType();
    const isLikelihoodValid = validateLikelihood();
    const isExposureValid = validateExposure();
    const isConsequenceValid = validateConsequence();

    if (isHazardNameValid && isHazardTypeValid && isLikelihoodValid && isExposureValid && isConsequenceValid) {
      // Proceed with form submission logic
    }
  };
  return (
    <div className="bg-white p-2 rounded-lg shadow-md w-full mt-2">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-hazard-content"
          id="panel-hazard-header"
        >
          <Typography>Hazard Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            <TextField
              id="inputHazardName"
              label="Hazard Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={hazardName}
              onChange={(e) => setHazardName(e.target.value)}
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
              Submit Hazard
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default HazardModule;
