// components/Modal.tsx

import { useState } from "react";

const Modal = ({ open, onClose, title, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 bg-black opacity-50 blur"></div>
          <div className="relative w-full max-w-2xl mx-auto my-6">
            <div className="relative rounded-lg shadow-lg dark:bg-zinc-900">
              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-zinc-400">
                  {title}
                </h2>
                <div>{children}</div>
              </div>
              <div className="flex justify-end p-4 dark:bg-zinc-600">
                <button
                  className="px-4 py-2 mr-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
