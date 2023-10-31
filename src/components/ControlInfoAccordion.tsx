// src/components/ControlInfoAccordion.tsx

import React from 'react';

const ControlInfoAccordion: React.FC = () => {
  return (
    <div className="accordion control-info-accordion">
      <h2>Control Information</h2>

      <div className="accordion-content">
        <label htmlFor="inputControlName">Control Name</label>
        <input type="text" id="inputControlName" name="controlName" />

        <label htmlFor="inputControlType">Control Type</label>
        <select id="inputControlType" name="controlType">
          <option value="elimination">Elimination</option>
          <option value="substitution">Substitution</option>
          <option value="engineering">Engineering</option>
          <option value="administrative">Administrative</option>
          <option value="ppe">PPE</option>
        </select>

        {/* Similar clickable numbers for these fields as in HazardInfoAccordion */}
        <div className="number-selector">
          <label>Likelihood of Occurrence After Control</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input type="radio" name="postInputLikelihood" value={num} />
              {num}
            </label>
          ))}
        </div>

        <div className="number-selector">
          <label>Exposure to Hazard After Control</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input type="radio" name="postInputExposure" value={num} />
              {num}
            </label>
          ))}
        </div>

        <div className="number-selector">
          <label>Consequence of Exposure to Hazard After Control</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input type="radio" name="postInputConsequence" value={num} />
              {num}
            </label>
          ))}
        </div>

        <button id="controlSubmitButton">Submit Control</button>
      </div>
    </div>
  );
};

export default ControlInfoAccordion;