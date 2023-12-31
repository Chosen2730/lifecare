import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, config } from "../../Utils/Constants/constants";
import { Spinner } from "react-activity";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import SideModal from "../../Utils/Modals/sideModal";

const SingleAppointment = ({ item, getHistory }) => {
  const { status, date, time, doctor, _id: id } = item || {};
  const { firstName, lastName, consultFee, specialization, surname } = doctor;
  const [isModalShown, setIsModalShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [newStatus, setNewStatus] = useState(status);

  const deleteAppointment = async () => {
    setIsLoading(true);
    const url = `${baseUrl}/appointment/${id}`;
    try {
      const res = await axios.delete(url, config(token));
      getHistory();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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

  return (
    <div className='rounded-md grid grid-cols-7 text-xs gap-2'>
      <h2>
        {firstName} {lastName} {surname}
      </h2>
      <h2>{specialization}</h2>
      <h2>{consultFee}</h2>
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
          onClick={deleteAppointment}
          disabled={isLoading}
          className='bg-red-100 flex items-center justify-center rounded-full p-2 text-red-600'
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <div className='flex items-center gap-1'>
              <AiOutlineDelete />
              Delete
            </div>
          )}
        </button>
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

export default SingleAppointment;
