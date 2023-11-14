// src/components/TableModule.tsx

import React from 'react';

const TableModule: React.FC = () => {
  return (
    <div className="tables-container">
      {/* General Table */}
      <div className="general-table">
        <table className="bg-white border border-gray-300 w-full mt-1">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-2">Company Name</th>
              <th colSpan={2}></th>
              <th className="text-right py-2 px-2">Formal Hazard Assessment</th>
            </tr>
            <tr>
              {/* Empty row */}
              <th colSpan={4}></th>
            </tr>
            <tr>
              <th className="py-2 px-2">Created By</th>
              <th className="py-2 px-2">Date Created</th>
              <th className="py-2 px-2">Position Being Evaluated</th>
              <th></th> {/* Empty cell for alignment */}
            </tr>
          </thead>
          <tbody>
            {/* Your general information will go here */}
          </tbody>
        </table>
      </div>

      {/* Evaluation Table */}
      <div className="evaluation-table">
        <table className="bg-white border border-gray-300 w-full mt-1">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-2">Task ID</th>
              <th className="py-2 px-2">Hazard ID</th>
              <th className="py-2 px-2">Hazard Name</th>
              <th className="py-2 px-2">Hazard Type</th>
              <th className="py-2 px-2">Risk Rating</th>
              <th className="py-2 px-2">Control ID</th>
              <th className="py-2 px-2">Control Name</th>
              <th className="py-2 px-2">Control Type</th>
              <th className="py-2 px-2">Risk Rating</th>
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

export default TableModule;
