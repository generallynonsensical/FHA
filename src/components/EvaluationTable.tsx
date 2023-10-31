// src/components/EvaluationTable.tsx

import React from 'react';

const EvaluationTable: React.FC = () => {
  return (
    <div className="tables-container">
      {/* General Table */}
      <div className="general-table">
        <h2>General Table</h2>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Created By</th>
              <th>Date Created</th>
              <th>Position Being Evaluated</th>
            </tr>
          </thead>
          <tbody>
            {/* Your general information will go here */}
          </tbody>
        </table>
      </div>

      {/* Evaluation Table */}
      <div className="evaluation-table">
        <h2>Evaluation Table</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Hazard ID</th>
              <th>Hazard Name</th>
              <th>Hazard Type</th>
              <th>L (1 - 5)</th>
              <th>E (1 - 5)</th>
              <th>C (1 - 5)</th>
              <th>Pre-control Risk Rating</th>
              <th>Control Name</th>
              <th>Control Type</th>
              <th>L (1 - 5)</th>
              <th>E (1 - 5)</th>
              <th>C (1 - 5)</th>
              <th>Post-control Risk Rating</th>
            </tr>
          </thead>
          <tbody>
            {/* Your dynamic rows will go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvaluationTable;
