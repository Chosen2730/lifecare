import React from "react";

const HeaderCard = ({ text }) => {
  return (
    <div className='bg-white text-sky-500 p-8 font-bold text-center -mx-6 mt-10 uppercase'>
      ADMIN | {text}
    </div>
  );
};

export default HeaderCard;
