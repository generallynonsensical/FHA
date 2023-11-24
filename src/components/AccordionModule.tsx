// AccordionModule.tsx
import React, { ReactNode } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionModuleProps {
  title: string;
  children: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
  expanded: boolean;
  onChange: () => void;
  

  fieldErrors: any; 
}

const AccordionModule: React.FC<AccordionModuleProps> = ({ title, children, onSubmit, buttonLabel, expanded, onChange, fieldErrors }) => {
  return (
    <Accordion onChange={onChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={onSubmit}>
          {children}
          <Button className="bg-blue-600"type="submit" variant="contained">{buttonLabel}</Button>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionModule;
