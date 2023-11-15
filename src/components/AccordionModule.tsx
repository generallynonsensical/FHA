import React, { ReactNode } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


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
        {children}
        <Button onClick={onSubmit} variant="contained" color="primary" sx={{ mt: 4 }}>
          {buttonLabel}
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionModule;
