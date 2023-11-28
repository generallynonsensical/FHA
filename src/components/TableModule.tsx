// src/components/TableModule.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableModule: React.FC = () => {
  return (
    <div className="tables-container" style={{ width: '100%'}}>
      {/* General Table */}
      <TableContainer component={Paper} style={{ width: '100%' }}>
        <Table style={{ }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Company Name: </TableCell>
              <TableCell colSpan={2}></TableCell>
              <TableCell align="right">Formal Hazard Assessment</TableCell>
            </TableRow>
            <TableRow>
              {/* Empty row */}
              <TableCell colSpan={4}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Created By: </TableCell>
              <TableCell>Date Created: </TableCell>
              <TableCell>Position Being Evaluated: </TableCell>
              <TableCell></TableCell> {/* Empty cell for alignment */}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Your general information will go here */}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Evaluation Table */}
      <TableContainer component={Paper} style={{ width: '100%' }}>
        <Table style={{  }}>
          <TableHead>
            <TableRow>
              <TableCell>Task ID</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Hazard ID</TableCell>
              <TableCell>Hazard Name</TableCell>
              <TableCell>Hazard Type</TableCell>
              <TableCell>Risk Rating</TableCell>
              <TableCell>Control ID</TableCell>
              <TableCell>Control Name</TableCell>
              <TableCell>Control Type</TableCell>
              <TableCell>Risk Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Your dynamic rows will go here */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableModule;
