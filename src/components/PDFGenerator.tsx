// src/components/PDFGenerator.tsx

import React from 'react';

interface PDFGeneratorProps {
  onSave: () => void;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ onSave }) => {
  return (
    <div className="save-as-pdf flex justify-left items-left mt-8">
      <button 
        onClick={onSave} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save as PDF
      </button>
    </div>
  );
};

export default PDFGenerator;
