// src/components/UndoRedoButtons.tsx

import React from 'react';

interface UndoRedoButtonsProps {
  onUndo: () => void;
  onRedo: () => void;
}

const UndoRedoButtons: React.FC<UndoRedoButtonsProps> = ({ onUndo, onRedo }) => {
  return (
    <div className="">
      <button 
        onClick={onUndo} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Undo
      </button>
      <button 
        onClick={onRedo} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedoButtons;
