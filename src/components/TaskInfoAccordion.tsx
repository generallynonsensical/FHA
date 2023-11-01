import React, { useState } from 'react';

const TaskAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full mt-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full text-gray-900 text-lg font-semibold mb-2 bg-gray-200 p-2 rounded-lg"
      >
        Task Information
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <form>
          <div className="mb-4">
            <label htmlFor="inputTask" className="block text-sm font-medium text-gray-700">Task Name</label>
            <input type="text" id="inputTask" className="mt-1 p-2 w-full rounded-md border" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4">
            Submit Task
          </button>
        </form>
      )}
    </div>
  );
};

export default TaskAccordion;
