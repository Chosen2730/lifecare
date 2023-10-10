import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/DashboardLayout/headerCard";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-activity";

const Book = () => {
  const [allSpecializations, setAllSpecializations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const token = localStorage.getItem("token");

  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const getSpecialization = async () => {
    setIsLoading(true);
    const url = `${baseUrl}/doctor/specializations`;
    try {
      const res = await axios.get(url, config(token));
      setAllSpecializations(["select specialization", ...res.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getDoctors = async () => {
    const specialization = userInfo?.specialization;
    setIsLoading(true);
    const url = `${baseUrl}/doctor/doctors?specialization=${specialization}`;
    try {
      const res = await axios.get(url, config(token));
      if (res.data.doctors) {
        setDoctors(res.data.doctors);
      } else {
        setDoctors([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const bookAppointment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `${baseUrl}/appointment`;
    const payload = {
      doctor: userInfo?.id,
      date: userInfo?.date,
      time: userInfo?.time,
    };
    try {
      const res = await axios.post(url, payload, config(token));
      console.log(res);
      toast.success("Appointment booked successfully");
      // window.location.reload()
    } catch (error) {
      console.log(error);
      toast.error("an error occurred while booking");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSpecialization();
  }, []);

  useEffect(() => {
    getDoctors();
  }, [userInfo.specialization]);

  const docArr = [
    "select doctor",
    ...doctors.map((doc) => `${doc.firstName} ${doc.lastName}`),
  ];

  useEffect(() => {
    const selectDoc = doctors.find((doc) => {
      const fullName = `${doc.firstName} ${doc.lastName}`;
      return fullName === userInfo?.doctor;
    });
    setUserInfo({
      ...userInfo,
      id: selectDoc?._id,
      consultFee: selectDoc?.consultFee || 0,
    });
  }, [userInfo.doctor]);

  return (
    <div>
      <HeaderCard text='Book Appointment' />
      <form
        action=''
        onSubmit={bookAppointment}
        className='bg-white my-10 p-8 rounded-2xl max-w-3xl mx-auto text-sky-500'
      >
        <h2 className='font-bold text-2xl text-sky-500 mb-10'>
          Book Appointment
        </h2>
        <label htmlFor='email' className='font-semibold block mb-2'>
          Doctor's Specification
        </label>
        <select
          className='border-[1px] border-sky-500 block w-full p-3 mb-5 capitalize'
          name='specialization'
          onChange={handleUserInfo}
          id=''
          required
        >
          {allSpecializations?.map((sp) => (
            <option value={sp} key={sp}>
              {sp}
            </option>
          ))}
        </select>
        <label htmlFor='email' className='font-semibold block mb-2'>
          Doctor
        </label>
        <select
          className='border-[1px] border-sky-500 block w-full p-3 mb-5 capitalize'
          name='doctor'
          id=''
          onChange={handleUserInfo}
          required
        >
          {docArr?.map((doc) => (
            <option value={doc} key={doc}>
              {doc}
            </option>
          ))}
        </select>
        <label htmlFor='email' className='font-semibold block mb-2'>
          Consultancy Fees
        </label>
        <input
          className='border-[1px] border-sky-500 bg-gray-200 block w-full p-3 mb-5'
          type='number'
          readOnly={true}
          value={userInfo?.consultFee}
          name=''
          id=''
        />
        <label htmlFor='email' className='font-semibold block mb-2'>
          Date
        </label>
        <input
          className='border-[1px] border-sky-500 block w-full p-3 mb-5'
          type='date'
          name='date'
          id=''
          onChange={handleUserInfo}
          required
        />
        <label htmlFor='email' className='font-semibold block mb-2'>
          Time
        </label>
        <input
          className='border-[1px] border-sky-500 block w-full p-3 mb-5'
          type='time'
          name='time'
          id=''
          required
          onChange={handleUserInfo}
        />
        <button
          type='submit'
          className='bg-sky-500 text-white rounded-full px-8 p-3'
        >
          {isLoading ? <Spinner /> : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Book;
