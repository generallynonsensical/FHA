// src/components/HazardInfoAccordion.tsx

import React from 'react';

const HazardInfoAccordion: React.FC = () => {
  return (
    <div className="accordion hazard-info-accordion">
      <h2>Hazard Information</h2>

      <div className="accordion-content">
        <label htmlFor="inputHazardName">Hazard Name</label>
        <input type="text" id="inputHazardName" name="hazardName" />

        <label htmlFor="inputHazardType">Hazard Type</label>
        <select id="inputHazardType" name="hazardType">
          <option value="health">Health</option>
          <option value="safety">Safety</option>
        </select>

        <div className="number-selector">
          <label>Likelihood of Occurrence</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input type="radio" name="preInputLikelihood" value={num} />
              {num}
            </label>
          ))}
        </div>

        <div className="number-selector">
          <label>Exposure to Hazard</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input type="radio" name="preInputExposure" value={num} />
              {num}
            </label>
          ))}
        </div>

        <div className="number-selector">
          <label>Consequence of Exposure to Hazard</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input type="radio" name="preInputConsequence" value={num} />
              {num}
            </label>
          ))}
        </div>

        <button id="hazardSubmitButton">Submit Hazard</button>
      </div>
    </div>
  );
};

export default HazardInfoAccordion;