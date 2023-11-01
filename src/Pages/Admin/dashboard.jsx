import React, { useEffect, useState } from "react";
import HeaderCard from "../../Components/AdminDashLayout/headerCard";
import appoint from "../../Assets/images/appoint.png";
import profile from "../../Assets/images/patient2.png";
import book from "../../Assets/images/book2.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, config } from "../../Utils/Constants/constants";
import { Spinner } from "react-activity";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({});
  const token = localStorage.getItem("token");
  const navigateTo = useNavigate();
  const dashActivity = [
    {
      icon: profile,
      title: "Manage Patients",
      sub: `Total Patients: ${details?.patient}`,
      url: "patients",
    },
    {
      icon: appoint,
      title: "Manage Doctors",
      sub: `Total Doctorss: ${details?.doctor}`,
      url: "doctors",
    },
    {
      icon: book,
      title: "Appointments",
      sub: `Total Appointments: ${details?.appointment}`,
      url: "appointment-history",
    },
  ];

  const getDetails = async () => {
    const url = `${baseUrl}/admin/get-details`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      setDetails(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className='text-white'>
      <HeaderCard text='Dashboard' />

      {isLoading ? (
        <div className='flex items-center justify-center mt-20'>
          <Spinner />
        </div>
      ) : (
        <div className='p-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {dashActivity.map(({ icon, title, sub, url }, ind) => (
              <div
                key={ind}
                onClick={() => navigateTo(url)}
                className='bg-white text-sky-500 flex flex-col items-center justify-center text-center p-4 rounded-xl transition hover:bg-gray-100 cursor-pointer md:hover:scale-95 select-none'
              >
                <img
                  src={icon}
                  className='w-16 bg-sky-500 p-4 rounded-2xl'
                  alt={title}
                />
                <h2 className='font-bold my-1'>{title}</h2>
                <h2 className='text-sm'>{sub}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
