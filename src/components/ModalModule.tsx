// src/components/ModalModule.tsx

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalModule: React.FC<ModalProps> = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Confirm Action</h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="bg-gray-300 text-gray-900 p-2 rounded-md">
            Go Back
          </button>
          <button onClick={onConfirm} className="bg-blue-500 text-white p-2 rounded-md">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalModule;