import React from "react";
import Image from "next/image";

const Modal = ({ open, onClose }) => {
  if (!open) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 p-4 md:p-8">
      <div className="relative bg-white rounded-lg shadow-md mx-auto w-full md:w-1/2">
        <div>
          {" "}
          <Image
            src="/images/line.jpg"
            alt="pic4"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/12"
            width={200}
            height={200}
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-2.5 px-2 py-1 text-base md:px-6 md:py-3 w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 hover:bg-slate-200 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
