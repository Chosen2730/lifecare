import React from "react";
import logo from "../Assets/images/logo.png";
import loginImg from "../Assets/images/login-img.png";
import icon from "../Assets/images/nav-icon.png";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className='py-20 p-5'>
      <img src={logo} className='mx-auto w-20' alt='' />
      <h2 className='text-center text-sky-500 font-bold mb-5 mt-20'>
        LIFECARE | Create Account
      </h2>
      <div className='shadow-2xl mt-10 relative rounded-bl-[100px]'>
        <img
          src={loginImg}
          className='w-full min-h-[80vh] object-cover md:w-3/4 rounded-bl-[100px] hidden md:block'
          alt=''
        />
        <div className='bg-white p-5 md:absolute top-0 right-0 bg-opacity-95'>
          <div className='flex gap-4 items-center '>
            <img src={icon} alt='navigation' />
            <h2 className='text-2xl font-bold'>Create an Account</h2>
          </div>
          <p className='my-3 text-gray-400'>
            Become repiit member & get exlusive treatment from repiit
          </p>
          <label htmlFor='email' className='font-semibold block mb-2'>
            First Name <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <input
            type='text'
            placeholder='Enter First Name'
            className='border-[1px] block w-full p-3 mb-5'
          />
          <label htmlFor='email' className='font-semibold block mb-2'>
            Last Name <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <input
            type='text'
            placeholder='Enter Last Name'
            className='border-[1px] block w-full p-3 mb-5'
          />
          <label htmlFor='email' className='font-semibold block mb-2'>
            Phone No <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <input
            type='tel'
            placeholder='Enter Phone Number'
            className='border-[1px] block w-full p-3 mb-5'
          />
          <label htmlFor='email' className='font-semibold block mb-2'>
            Email <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <input
            type='email'
            placeholder='Enter email'
            className='border-[1px] block w-full p-3 mb-5'
          />
          <label htmlFor='email' className='font-semibold block mb-2'>
            Role <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <select name='' id='' className='border-[1px] block w-full p-3 mb-5'>
            <option value=''>Select</option>
            <option value='patient'>Patient</option>
            <option value='doctor'>Doctor</option>
          </select>
          <label htmlFor='email' className='font-semibold block mb-2'>
            Password <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <div>
            <input
              type='password'
              placeholder='Enter password'
              className='border-[1px] block w-full p-3 mb-5'
            />
          </div>
          <button className='w-full p-3 bg-sky-500 text-white rounded-md'>
            Sign Up
          </button>
          <h2 className='my-8 text-center'>
            Already have an account?{" "}
            <Link className='text-blue-800' to='/login'>
              Login
            </Link>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
