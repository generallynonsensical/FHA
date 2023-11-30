import React, { ReactNode } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Define props for AccordionModule component
interface AccordionModuleProps {
  title: string;                   // The title of the accordion
  children: ReactNode;            // Child elements within the accordion
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;   // Function to handle form submission
  buttonLabel: string;            // Label for the submit button
  expanded: boolean;              // Boolean to control accordion expansion state
  onChange: () => void;           // Function to handle accordion state change
  onToggle: () => void;           // Function to handle accordion state change
  fieldErrors: any;               // Error information related to form fields
}

// AccordionModule component definition
const AccordionModule: React.FC<AccordionModuleProps> = ({ title, children, onSubmit, buttonLabel, expanded, onChange, onToggle, fieldErrors }) => {
  return (
    <Accordion 
      expanded={expanded}
      onChange={() => {
        if (expanded) {
          // Perform action when accordion is expanded
        } else {
          // Perform action when accordion is collapsed
        }
      }}
>
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
