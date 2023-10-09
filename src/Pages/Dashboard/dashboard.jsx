import React from "react";
import HeaderCard from "../../Components/DashboardLayout/headerCard";
import appoint from "../../Assets/images/appoint.png";
import book2 from "../../Assets/images/book2.png";
import profile from "../../Assets/images/profile.png";

const Dashboard = () => {
  const dashActivity = [
    { icon: profile, title: "My Profile", sub: "Update Profile" },
    { icon: appoint, title: "My Appointment", sub: "View Appointment History" },
    { icon: book2, title: "Book My Appointment", sub: "Book Appointment " },
  ];
  return (
    <div className='text-white'>
      <HeaderCard text='Book Appointment' />
      <div className='p-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {dashActivity.map(({ icon, title, sub }, ind) => (
            <div
              key={ind}
              className='bg-white text-sky-500 flex flex-col items-center justify-center text-center p-4 rounded-xl'
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

export default Dashboard;
