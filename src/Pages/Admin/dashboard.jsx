import React from "react";
import HeaderCard from "../../Components/AdminDashLayout/headerCard";
import appoint from "../../Assets/images/appoint.png";
import profile from "../../Assets/images/patient2.png";
import book from "../../Assets/images/book2.png";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigateTo = useNavigate();
  const dashActivity = [
    {
      icon: profile,
      title: "Manage Patients",
      sub: "Total Patients: 8",
      url: "patients",
    },
    {
      icon: appoint,
      title: "Manage Doctors",
      sub: "Total Doctors: 3",
      url: "doctors",
    },
    {
      icon: book,
      title: "Appointments",
      sub: "Total Appointments: 3",
      url: "appointment-history",
    },
  ];
  return (
    <div className='text-white'>
      <HeaderCard text='Dashboard' />
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
    </div>
  );
};

export default AdminDashboard;
