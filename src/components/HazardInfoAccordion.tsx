import React, { useState } from 'react';

const HazardAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full mt-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full text-gray-900 text-lg font-semibold mb-2 bg-gray-200 p-2 rounded-lg"
      >
        Hazard Information
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <form>
          <div className="mb-4">
            <label htmlFor="inputHazardName" className="block text-sm font-medium text-gray-700">Hazard Name</label>
            <input type="text" id="inputHazardName" className="mt-1 p-2 w-full rounded-md border" />
          </div>
          <div className="mb-4">
            <label htmlFor="inputHazardType" className="block text-sm font-medium text-gray-700">Hazard Type</label>
            <select id="inputHazardType" className="mt-1 p-2 w-full rounded-md border">
              <option>Health</option>
              <option>Safety</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Likelihood of Occurrence</label>
            <div className="flex gap-4 mt-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={`pre-likelihood-${num}`} type="button" className="p-2 rounded-md border">
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Exposure to Hazard</label>
            <div className="flex gap-4 mt-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={`pre-exposure-${num}`} type="button" className="p-2 rounded-md border">
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Consequence of Exposure</label>
            <div className="flex gap-4 mt-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={`pre-consequence-${num}`} type="button" className="p-2 rounded-md border">
                  {num}
                </button>
              ))}
            </div>
          </div>
         
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4">
            Submit Hazard
          </button>
        </form>
      )}
    </div>
  );
};

export default HazardAccordion;
