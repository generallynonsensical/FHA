import React, { useState } from 'react';

const ControlAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full mt-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full text-gray-900 text-lg font-semibold mb-2 bg-gray-200 p-2 rounded-lg"
      >
        Control Information
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <form>
          <div className="mb-4">
            <label htmlFor="inputControlName" className="block text-sm font-medium text-gray-700">Control Name</label>
            <input type="text" id="inputControlName" className="mt-1 p-2 w-full rounded-md border" />
          </div>
          <div className="mb-4">
            <label htmlFor="inputControlType" className="block text-sm font-medium text-gray-700">Control Type</label>
            <select id="inputControlType" className="mt-1 p-2 w-full rounded-md border">
              <option>Elimination</option>
              <option>Substitution</option>
              <option>Engineering</option>
              <option>Administrative</option>
              <option>PPE</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Likelihood After Control</label>
            <div className="flex gap-4 mt-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={`post-likelihood-${num}`} type="button" className="p-2 rounded-md border">
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Exposure After Control</label>
            <div className="flex gap-4 mt-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={`post-exposure-${num}`} type="button" className="p-2 rounded-md border">
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Consequence After Control</label>
            <div className="flex gap-4 mt-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <button key={`post-consequence-${num}`} type="button" className="p-2 rounded-md border">
                  {num}
                </button>
              ))}
            </div>
          </div>
          {/* ... similar blocks for Exposure and Consequence after Control ... */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4">
            Submit Control
          </button>
        </form>
      )}
    </div>
  );
};

export default ControlAccordion;
