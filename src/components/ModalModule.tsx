import React from 'react';

// Define the props for the ModalModule component
interface ModalProps {
  isOpen: boolean;    // Indicates if the modal is open
  message: string;    // Message to display in the modal
  onConfirm: () => void;  // Function to handle the confirmation action
  onCancel: () => void;   // Function to handle canceling the action
}

// ModalModule component
const ModalModule: React.FC<ModalProps> = ({ isOpen, message, onConfirm, onCancel }) => {
  // If the modal is not open, return null (don't render anything)
  if (!isOpen) {
    return null;
  }

  // Render the modal content
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
