import React from "react";
import logo from "../../Assets/images/logo-white.png";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import dash from "../../Assets/images/dash.png";
import appointment from "../../Assets/images/appointment.png";
import search from "../../Assets/images/search.png";
import book from "../../Assets/images/book.png";
import patients from "../../Assets/images/patients.png";
import { BiLogOutCircle } from "react-icons/bi";

const Sidebar = ({ closeSidebar }) => {
  const sidebarLinks = [
    { text: "Dashboard", link: "", img: dash },
    { text: "Doctors", link: "doctors", img: book },
    { text: "Patients", link: "patients", img: patients },
    {
      text: "Appointment History",
      link: "appointment-history",
      img: appointment,
    },
    {
      text: "Patients Search",
      link: "search",
      img: search,
    },
  ];

  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className='h-screen overflowHide bg-sky-500'>
      <div className='flex justify-between items-center p-8'>
        <img src={logo} alt='logo' className='w-20' />
        <IoCloseOutline
          className='text-3xl text-pry md:hidden text-white'
          onClick={closeSidebar}
        />
      </div>

      <div className='flex flex-col gap-1 bg-white p-8'>
        <h2 className='text-sky-600 font-medium uppercase'>Main Navigaion</h2>
        {sidebarLinks.map(({ link, text, img }, ind) => {
          return (
            <Link
              to={link}
              key={ind}
              className={
                "text-white flex items-center gap-2 py-4 rounded-md md:hover:bg-gray-100"
              }
              onClick={() => {
                closeSidebar();
              }}
            >
              <img src={img} className='w-6' alt={text} />
              <h2 className='text-sm text-sky-500'>{text}</h2>
            </Link>
          );
        })}
        <Link
          to='/login'
          onClick={logout}
          className='bg-sky-500 text-white rounded-full shadow-md p-3 flex items-center gap-2 justify-center mt-20'
        >
          <BiLogOutCircle />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
