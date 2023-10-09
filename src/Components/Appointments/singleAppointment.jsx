import React from "react";

const SingleAppointment = () => {
  const status = "cancelled";
  return (
    <div className='rounded-md grid grid-cols-6 text-xs gap-2'>
      <h2>Olawale David</h2>
      <h2>Pediatrician</h2>
      <h2>4000</h2>
      <h2>12th November 2023</h2>
      <h2>2pm</h2>
      <h2
        className={`${
          status === "pending"
            ? "text-sky-700 bg-sky-100 "
            : status === "delivered"
            ? "text-green-700 bg-geen-100"
            : "text-red-700 bg-red-100"
        } capitalize p-2 text-center rounded-full`}
      >
        {status}
      </h2>
    </div>
  );
};

export default SingleAppointment;
