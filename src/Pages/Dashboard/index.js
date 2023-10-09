import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/DashboardLayout/sidebar";
import Header from "../../Components/DashboardLayout/header";

const DashIndex = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigateTo = useNavigate();

  // useEffect(() => {
  //   if (!access) {
  //     navigateTo("/login");
  //   }
  // }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='max-width2 relative overflow-x-hidden bg-grad'>
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block md:w-[30%] fixed top-0 left-0 z-10 bg-white transition`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>
      <div className='md:w-[70%] ml-auto p-3 md:p-6'>
        <Header toggleSidebar={toggleSidebar} />
        <div className='my-1 min-h-screen'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashIndex;
