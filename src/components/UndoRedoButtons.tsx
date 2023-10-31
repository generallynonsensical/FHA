// src/components/UndoRedoButtons.tsx

import React from 'react';

interface UndoRedoButtonsProps {
  onUndo: () => void;
  onRedo: () => void;
}

const UndoRedoButtons: React.FC<UndoRedoButtonsProps> = ({ onUndo, onRedo }) => {
  return (
    <div className="undo-redo-buttons">
      <button onClick={onUndo}>Undo</button>
      <button onClick={onRedo}>Redo</button>
    </div>
  );
};

export default UndoRedoButtons;