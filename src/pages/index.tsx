// src/pages/index.tsx

import React from 'react';
import AccordionContainer from '../containers/AccordionContainer';
import TableContainer from '../containers/TableContainer';
import PDFGenerator from '../components/PDFGenerator';
import UndoRedoButtons from '../components/UndoRedoButtons';

const App: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1 p-4 border-r border-gray-300">
        <AccordionContainer />
        <UndoRedoButtons onUndo={() => {}} onRedo={() => {}} />
      </div>

      <div className="flex-1 p-4 border-l border-gray-300">
        <TableContainer />
        <PDFGenerator onSave={() => {}} />
      </div>
    </div>
  );
};

export default App;