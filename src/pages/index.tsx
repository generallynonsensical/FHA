// src/pages/index.tsx

import React from 'react';
import AccordionContainer from '../containers/InputModule';
import Tables from '../containers/OutputModule';
import PDFGenerator from '../components/PDFModule';
import UndoRedoButtons from '../components/UndoRedoModule';

const App: React.FC = () => {
  return (
    <div className="containers flex w-full">
      <div className="p-1 border-r border-gray-300">
        <AccordionContainer />
      </div>

      <div className="p-1 border-l border-gray-300">
        <Tables />
      </div>
    </div>
      );
};

export default App;