// src/components/SaveAsPDF.tsx

import React from 'react';

interface SaveAsPDFProps {
  onSave: () => void;
}

const SaveAsPDF: React.FC<SaveAsPDFProps> = ({ onSave }) => {
  return (
    <div className="save-as-pdf">
      <button onClick={onSave}>Save as PDF</button>
    </div>
  );
};

export default SaveAsPDF;
