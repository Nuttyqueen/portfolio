import React from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ open, onClose }) => {
  if (!open) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 p-4 md:p-8">
      <div className="relative bg-white rounded-lg shadow-md mx-auto w-full md:w-1/2">
        <div className="my-36">
          {" "}
          <Image
            src="/images/line.jpg"
            alt="pic4"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/14 mt-20"
            width={200}
            height={200}
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-2.5 px-2 py-2 text-base md:px-6 md:py-6 w-10 h-10 rounded-full mr-15 lg:mr-40 bg-slate-950"
        >
          <XMarkIcon className="h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
