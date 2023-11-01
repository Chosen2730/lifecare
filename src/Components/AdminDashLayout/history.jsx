import React, { useEffect, useState } from "react";
import { baseUrl, config } from "../../Utils/Constants/constants";
import axios from "axios";

const SingleAdminHistory = ({ item }) => {
  const { status, date, time, patient: pat, _id: id, doctor } = item || {};
  const [patient, setPatient] = useState({});
  const token = localStorage.getItem("token");

  const getPatient = async () => {
    const url = `${baseUrl}/patient/${pat}`;
    try {
      const res = await axios.get(url, config(token));
      setPatient(res.data.patient);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getPatient();
  }, []);

  // console.log(item);

  const { firstName, lastName, tel, email, surname } = patient || {};
  const {
    firstName: docName,
    lastName: docName2,
    tel: docTel,
    email: docEmail,
    surname: docSurname,
  } = doctor || {};

  return (
    <div className='rounded-md grid grid-cols-9 text-xs gap-2'>
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
      <h2>
        {docName} {docName2} {docSurname}
      </h2>
      <h2>{docEmail?.length > 20 ? `${docEmail.slice(0, 20)}...` : docName}</h2>
      <h2>{docTel}</h2>
    </div>
  );
};

export default SingleAdminHistory;
