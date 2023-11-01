import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/DashboardLayout/headerCard";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { baseUrl, config } from "../../Utils/Constants/constants";
import { Spinner } from "react-activity";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [isCreated, setIsCreated] = useState(true);

  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const getProfile = async () => {
    setIsLoading(true);
    const url = `${baseUrl}/patient`;
    try {
      const res = await axios.get(url, config(token));

      if (res.data.created === false) {
        setIsCreated(false);
        setUserInfo({ ...user });
      } else {
        setIsCreated(true);
        console.log("first");
        setUserInfo({ ...res.data.patient });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const createProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `${baseUrl}/patient`;
    try {
      const res = await axios.post(url, userInfo, config(token));
      toast.success("Profile successfully updated");
      setTimeout(() => {
        getProfile();
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.msg);
    } finally {
      setIsLoading(false);
    }
  };
  const updateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `${baseUrl}/patient`;
    try {
      const res = await axios.patch(url, userInfo, config(token));
      toast.success("Profile successfully updated");
      setTimeout(() => {
        getProfile();
      }, 3000);
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <HeaderCard text='Profile' />

      <form
        className='bg-white my-10 p-8 rounded-2xl max-w-3xl mx-auto text-sky-500'
        action=''
        onSubmit={isCreated ? updateProfile : createProfile}
      >
        <h2 className='font-bold text-2xl text-sky-500 mb-10'>
          Patient's Details
        </h2>
        <div className='grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-4'>
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='First Name'
            name='firstName'
            id=''
            value={userInfo?.firstName || ""}
            onChange={handleUserInfo}
          />
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='Last Name'
            name='lastName'
            id=''
            value={userInfo?.lastName || ""}
            onChange={handleUserInfo}
          />
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='Surname'
            name='surname'
            value={userInfo?.surname || ""}
            onChange={handleUserInfo}
            id=''
          />

          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='Address'
            name='address'
            value={userInfo?.address || ""}
            onChange={handleUserInfo}
            id=''
          />
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='number'
            placeholder='Age'
            name='age'
            id=''
            value={userInfo?.age || ""}
            onChange={handleUserInfo}
          />
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='State'
            name='state'
            id=''
            value={userInfo?.state || ""}
            onChange={handleUserInfo}
          />
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='Marital Status'
            name='maritalStatus'
            value={userInfo?.maritalStatus || ""}
            onChange={handleUserInfo}
            id=''
          />
          <select
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            name='sex'
            value={userInfo?.sex || ""}
            onChange={handleUserInfo}
          >
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='Phone Number'
            name='tel'
            id=''
            value={userInfo?.tel || ""}
            onChange={handleUserInfo}
          />
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='tel'
            placeholder='Emergency Contact'
            name='emergencyContact'
            id=''
            value={userInfo?.emergencyContact || ""}
            onChange={handleUserInfo}
          />
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='Blood Group'
            name='bloodGroup'
            id=''
            value={userInfo?.bloodGroup || ""}
            onChange={handleUserInfo}
          />
          <input
            className='border-[1px] border-sky-500 block w-full p-3 mb-5'
            type='text'
            placeholder='Genotype'
            name='genotype'
            id=''
            value={userInfo?.genotype || ""}
            onChange={handleUserInfo}
          />
        </div>
        <button
          type='submit'
          className='bg-sky-500 text-white rounded-full px-8 p-3'
        >
          {isLoading ? <Spinner /> : isCreated ? "Update" : " Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Profile;
