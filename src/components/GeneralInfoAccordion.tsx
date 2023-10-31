// src/components/GeneralInfoAccordion.tsx

import React from 'react';

const GeneralInfoAccordion: React.FC = () => {
  return (
    <div className="accordion general-info-accordion">
      <h2>General Information</h2>

      <div className="accordion-content">
        <label htmlFor="inputGeneralName">Created By</label>
        <input type="text" id="inputGeneralName" name="createdBy" />

        <label htmlFor="inputDate">Date</label>
        <input type="date" id="inputDate" name="date" />

        <label htmlFor="inputCompanyName">Company Name</label>
        <input type="text" id="inputCompanyName" name="companyName" />

        <label htmlFor="inputPositionEval">Position Being Evaluated</label>
        <input type="text" id="inputPositionEval" name="positionEvaluated" />

        <button id="generalSubmitButton">Submit Information</button>
      </div>
    </div>
  );
};

export default GeneralInfoAccordion;