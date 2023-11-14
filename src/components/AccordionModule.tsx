import React, { ReactNode } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface FieldError {
  error: boolean;
  helperText: string;
}

interface AccordionModuleProps {
  title: string;
  children: ReactNode;
  onSubmit: () => void;
  buttonLabel: string;
  fieldErrors: { [fieldName: string]: FieldError };
  expanded: boolean;
  onChange: () => void;
}

const AccordionModule: React.FC<AccordionModuleProps> = ({
  title, children, onSubmit, buttonLabel, fieldErrors, expanded, onChange
}) => {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Object.entries(fieldErrors).map(([fieldName, { error, helperText }]) => (
          <FormControl key={fieldName} error={error} fullWidth>
            {error && <FormHelperText>{helperText}</FormHelperText>}
          </FormControl>
        ))}
        {children}
        <Button onClick={onSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
          {buttonLabel}
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionModule;
