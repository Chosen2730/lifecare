import React from "react";
import { MdClose } from "react-icons/md";
const SideModal = ({ visibilityState, closeModal, children }) => {
  return (
    <div
      className={`bg-gray-600 bg-opacity-70 w-full h-screen flex justify-end fixed top-0 right-0 z-20 p-5 transition ${
        visibilityState ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className='bg-white w-full max-w-xl rounded-md shadow-md p-4 sm:p-8 overflowHide'>
        <div className='flex justify-between items-center'>
          <div />
          <i className='text-xl rounded-full border p-1' onClick={closeModal}>
            <MdClose />
          </i>
        </div>
        <div className='my-6 flex flex-col items-center justify-center text-center'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideModal;
