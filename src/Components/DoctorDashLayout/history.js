import React, { useEffect, useState } from "react";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { Spinner } from "react-activity";
import SideModal from "../../Utils/Modals/sideModal";

const SingleHistory = ({ item, getHistory }) => {
  const { status, date, time, patient: pat, _id: id } = item || {};
  const [patient, setPatient] = useState({});
  const [isModalShown, setIsModalShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [newStatus, setNewStatus] = useState(status);

  const getPatient = async () => {
    setIsLoading(true);
    const url = `${baseUrl}/patient/${pat}`;
    try {
      const res = await axios.get(url, config(token));
      setPatient(res.data.patient);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPatient();
  }, []);

  const updateAppointment = async () => {
    setIsLoading(true);
    const url = `${baseUrl}/appointment/${id}`;
    try {
      const res = await axios.patch(url, { status: newStatus }, config(token));
      getHistory();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const { firstName, lastName, tel, email, surname } = patient || {};

  return (
    <div className='rounded-md grid grid-cols-7 text-xs gap-2'>
      <h2>
        {firstName} {lastName} {surname}
      </h2>

      <h2>{email?.length > 20 ? `${email.slice(0, 20)}...` : email}</h2>
      <h2>{tel}</h2>
      <h2>{date}</h2>
      <h2>{time}</h2>
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
      <div className='flex gap-2'>
        <button
          onClick={() => setIsModalShown(true)}
          disabled={isLoading}
          className='bg-blue-100 flex items-center justify-center rounded-full p-2 text-blue-600'
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <div className='flex items-center gap-1'>
              <AiOutlineEdit />
              Edit
            </div>
          )}
        </button>
      </div>
      <SideModal
        visibilityState={isModalShown}
        closeModal={() => setIsModalShown(false)}
      >
        <form
          action=''
          onSubmit={updateAppointment}
          className='bg-white my-10 p-8 rounded-2xl max-w-3xl mx-auto text-sky-500'
        >
          <h2 className='font-bold text-2xl text-sky-500 mb-10'>
            Edit Appointment
          </h2>

          <select
            className='border-[1px] border-sky-500 block w-full p-3 mb-5 capitalize rounded-full'
            name='specialization'
            id=''
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            required
          >
            <option value=''>Change Status</option>
            <option value='pending'>pending</option>
            <option value='cancelled'>cancelled</option>
            <option value='in progress'>in progress</option>
            <option value='unavailable'>unavailable</option>
            <option value='completed'>completed</option>
          </select>
          <button
            type='submit'
            className='bg-sky-500 text-white rounded-full px-8 p-3'
          >
            {isLoading ? <Spinner /> : "Submit"}
          </button>
        </form>
      </SideModal>
    </div>
  );
};

export default SingleHistory;
