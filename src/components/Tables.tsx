// src/components/Tables.tsx

import React from 'react';

const Tables: React.FC = () => {
  return (
    <div className="tables-container space-y-8">
      {/* General Table */}
      <div className="general-table">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4">Company Name</th>
              <th colSpan={2}></th>
              <th className="text-right py-3 px-4">Formal Hazard Assessment</th>
            </tr>
            <tr>
              {/* Empty row */}
              <th colSpan={4}></th>
            </tr>
            <tr>
              <th className="py-3 px-4">Created By</th>
              <th className="py-3 px-4">Date Created</th>
              <th className="py-3 px-4">Position Being Evaluated</th>
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
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4">Task ID</th>
              <th className="py-3 px-4">Hazard ID</th>
              <th className="py-3 px-4">Hazard Name</th>
              <th className="py-3 px-4">Hazard Type</th>
              <th className="py-3 px-4">Risk Rating</th>
              <th className="py-3 px-4">Control ID</th>
              <th className="py-3 px-4">Control Name</th>
              <th className="py-3 px-4">Control Type</th>
              <th className="py-3 px-4">Risk Rating</th>
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

export default Tables;
