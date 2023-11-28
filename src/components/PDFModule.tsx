import React from 'react';

// Define the props for the PDFModule component
interface PDFGeneratorProps {
  onSave: () => void; // Function to handle saving as PDF
}

// PDFModule component
const PDFModule: React.FC<PDFGeneratorProps> = ({ onSave }) => {
  return (
    <div className="save-as-pdf">
      <button 
        onClick={onSave} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
      >
        Save as PDF
      </button>
    </div>
  );
};

export default PDFModule;
