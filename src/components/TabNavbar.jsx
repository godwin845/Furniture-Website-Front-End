import React from 'react';
import { NavLink } from 'react-router-dom';

const TabNavbar = () => {
  return (
    <div className='mt-10 font-sans'>
      <NavLink
        to='/user'
        className={({ isActive }) =>
          `${isActive ? 'text-white bg-[#FB7B9B]' : 'text-white bg-gray-600'} w-30 text-white p-5 rounded-xl ml-5`
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to='/orders'
        className={({ isActive }) =>
          `${isActive ? 'text-white bg-[#FB7B9B]' : 'text-white bg-gray-600'} w-30 text-white p-5 rounded-xl ml-5`
        }
      >
        My Orders
      </NavLink>
    </div>
  );
};

export default TabNavbar;