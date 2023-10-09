import React from "react";
import HeaderCard from "../../Components/DashboardLayout/headerCard";

const Book = () => {
  return (
    <div>
      <HeaderCard text='Book Appointment' />
      <form
        action=''
        className='bg-white my-10 p-8 rounded-2xl max-w-3xl mx-auto text-sky-500'
      >
        <h2 className='font-bold text-2xl text-sky-500 mb-10'>
          Book Appointment
        </h2>
        <label htmlFor='email' className='font-semibold block mb-2'>
          Doctor's Specification
        </label>
        <select
          className='border-[1px] border-sky-500 block w-full p-3 mb-5'
          name=''
          id=''
        >
          <option value=''>Select Specification</option>
        </select>
        <label htmlFor='email' className='font-semibold block mb-2'>
          Doctor
        </label>
        <select
          className='border-[1px] border-sky-500 block w-full p-3 mb-5'
          name=''
          id=''
        >
          <option value=''>Select Doctor</option>
        </select>
        <label htmlFor='email' className='font-semibold block mb-2'>
          Consultancy Fees
        </label>
        <input
          className='border-[1px] border-sky-500 bg-gray-200 block w-full p-3 mb-5'
          type='number'
          readOnly={true}
          value='5000'
          name=''
          id=''
        />
        <label htmlFor='email' className='font-semibold block mb-2'>
          Date
        </label>
        <input
          className='border-[1px] border-sky-500 block w-full p-3 mb-5'
          type='date'
          name=''
          id=''
        />
        <label htmlFor='email' className='font-semibold block mb-2'>
          Time
        </label>
        <input
          className='border-[1px] border-sky-500 block w-full p-3 mb-5'
          type='time'
          name=''
          id=''
        />
        <button
          type='submit'
          className='bg-sky-500 text-white rounded-full px-8 p-3'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Book;
