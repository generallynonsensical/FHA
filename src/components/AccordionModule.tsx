import React, { ReactNode } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionModuleProps {
  title: string;
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggle: () => void;
  fieldErrors: any;
  buttonLabel: string;
  expanded: boolean; // Whether the accordion is expanded
}

const AccordionModule: React.FC<AccordionModuleProps> = ({ title, children, onSubmit, buttonLabel, expanded }) => {
  return (
    <Accordion expanded={expanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={onSubmit}>
          {children}
          <Button className="bg-blue-600" type="submit" variant="contained">{buttonLabel}</Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionModule;
