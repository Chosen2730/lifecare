import React from "react";
import logo from "../Assets/images/logo.png";
import hero from "../Assets/images/hero.png";
import admin from "../Assets/images/admin-icon.png";
import doctor from "../Assets/images/doc-icon.png";
import patient from "../Assets/images/log-icon.png";
import { Link } from "react-router-dom";

const Home = () => {
  const actions = [
    {
      icon: patient,
      title: "PATIENT'S  LOGIN",
      sub: "Register & Book Appointment",
    },
    {
      icon: doctor,
      title: "DOCTOR'S LOGIN",
      sub: "Attend to Patients",
    },
    {
      icon: admin,
      title: "ADMIN'S LOGIN",
      sub: "Edit Appointment",
    },
  ];

  return (
    <div className=''>
      <div className='relative'>
        <img
          src={hero}
          className='w-full h-[600px] object-cover'
          alt='hero-img'
        />
        <img src={logo} alt='logo' className='absolute top-10 left-10 w-20' />
      </div>
      <div className='grid grid-cols-1 p-6 sm:grid-cols-3 gap-8 max-w-5xl mx-auto bg-white sm:-mt-28 shadow-xl z-10 relative rounded-2xl'>
        {actions.map(({ icon, title, sub }, ind) => (
          <div
            className={`bg-sky-500 text-white rounded-[100px] p-5 flex items-center flex-col justify-center gap-2 text-center`}
            key={ind}
          >
            <img src={icon} className='' alt={title} />
            <h2 className='font-bold text-lg'>{title}</h2>
            <h4>{sub}</h4>
            <Link to='/login'>Click Here</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
