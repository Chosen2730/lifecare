import React from "react";

const DoctorHeaderCard = ({ text }) => {
  return (
    <div className='bg-white text-sky-500 p-8 font-bold text-center -mx-6 mt-10 uppercase'>
      Doctor | {text}
    </div>
  );
};

export default DoctorHeaderCard;
