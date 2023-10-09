import React from "react";

import logo from "../../Assets/images/logo.png";
import { BiUserCircle } from "react-icons/bi";
import { RiMenu5Fill } from "react-icons/ri";

const Header = ({ toggleSidebar }) => {
  return (
    <div className='grid grid-cols-3 gap-4 items-center text-white'>
      <div className='hidden md:block' />
      <RiMenu5Fill
        className='text-2xl text-pry md:hidden'
        onClick={toggleSidebar}
      />

      <div className='flex items-center justify-center'>
        <img src={logo} className='w-20 ' alt='logo' />
      </div>

      <div className='flex items-center gap-2'>
        <BiUserCircle className='text-2xl' />
        <h2 className='font-semibold text-sm'>David</h2>
      </div>
    </div>
  );
};

export default Header;
