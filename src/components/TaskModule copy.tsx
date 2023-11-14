import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TaskModule: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const validateInput = () => {
    if (!taskName.trim()) {
      setError(true);
      setHelperText('Task name is required');
      return false;
    }
    // Add more validation rules here if needed
    setError(false);
    setHelperText('');
    return true;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateInput()) {
      console.log('Submitted Task Name:', taskName);
      // Handle the submission here
    }
  };

  return (
    <div className="bg-white p-2 rounded-lg shadow-md w-full mt-2">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Task Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            <TextField
              id="inputTask"
              label="Task Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={taskName}
              onChange={handleInputChange}
              error={error}
              helperText={helperText}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit Task
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TaskModule;
