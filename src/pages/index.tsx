// src/pages/index.tsx

import React from 'react';
import AccordionContainer from '../containers/AccordionContainer';
import Tables from '../components/Tables';
import PDFGenerator from '../components/PDFGenerator';
import UndoRedoButtons from '../components/UndoRedoButtons';

const App: React.FC = () => {
  return (
    <div className="flex">
      <div className="p-2 border-r border-gray-300 w-2/10">
        <AccordionContainer />
        <UndoRedoButtons onUndo={() => {}} onRedo={() => {}} />
      </div>

      <div className="p-2 border-l border-gray-300 w-7/10">
        <Tables />
        <PDFGenerator onSave={() => {}} />
      </div>
    </div>
  );
};

export default App;