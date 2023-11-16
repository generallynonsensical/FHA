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
  buttonLabel: string;
  fieldErrors: { [fieldName: string]: FieldError };
  expanded: boolean;
  onChange: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void; // Modify this line
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
        <form onSubmit={onSubmit}> {/* Wrap in form */}
          {children}
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 4 }}>
            {buttonLabel}
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};
export default AccordionModule;
