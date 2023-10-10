import React, { useState } from "react";
import logo from "../Assets/images/logo.png";
import loginImg from "../Assets/images/login-img.png";
import icon from "../Assets/images/nav-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../Utils/Constants/constants";
import axios from "axios";
import { Spinner } from "react-activity";
import { ToastContainer, toast } from "react-toastify";

const CreateAccount = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();

  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const createAccount = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `${baseUrl}/auth/register`;
    try {
      const res = await axios.post(url, userInfo);

      toast.success("Account successfully registered");
      setTimeout(() => {
        navigateTo("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.msg);
    } finally {
      setIsLoading(false);
    }
  };

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
        <form
          onSubmit={createAccount}
          className='bg-white p-5 md:absolute top-0 right-0 bg-opacity-95'
        >
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
            name='firstName'
            onChange={handleUserInfo}
            required
            type='text'
            placeholder='Enter First Name'
            className='border-[1px] block w-full p-3 mb-5'
          />
          <label htmlFor='email' className='font-semibold block mb-2'>
            Last Name <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <input
            name='lastName'
            onChange={handleUserInfo}
            type='text'
            required
            placeholder='Enter Last Name'
            className='border-[1px] block w-full p-3 mb-5'
          />
          <label htmlFor='email' className='font-semibold block mb-2'>
            Phone No <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <input
            type='tel'
            name='tel'
            required
            onChange={handleUserInfo}
            placeholder='Enter Phone Number'
            className='border-[1px] block w-full p-3 mb-5'
          />
          <label htmlFor='email' className='font-semibold block mb-2'>
            Email <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <input
            name='email'
            type='email'
            required
            onChange={handleUserInfo}
            placeholder='Enter email'
            className='border-[1px] block w-full p-3 mb-5'
          />
          <label htmlFor='email' className='font-semibold block mb-2'>
            Role <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <select
            name='role'
            onChange={handleUserInfo}
            required
            id=''
            className='border-[1px] block w-full p-3 mb-5'
          >
            <option value=''>Select</option>
            <option value='patient'>Patient</option>
            <option value='doctor'>Doctor</option>
          </select>
          <label htmlFor='email' className='font-semibold block mb-2'>
            Password <span className='text-xl text-sky-500'>*</span>{" "}
          </label>
          <div>
            <input
              name='password'
              required
              onChange={handleUserInfo}
              type='password'
              placeholder='Enter password'
              className='border-[1px] block w-full p-3 mb-5'
            />
          </div>
          <button
            disabled={isLoading}
            className='w-full p-3 bg-sky-500 text-white rounded-md text-center flex items-center justify-center'
          >
            {isLoading ? <Spinner /> : "Sign Up"}
          </button>
          <h2 className='my-8 text-center'>
            Already have an account?{" "}
            <Link className='text-blue-800' to='/login'>
              Login
            </Link>{" "}
          </h2>
        </form>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default CreateAccount;
