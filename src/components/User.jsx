import React from 'react';
import { useNavigate } from 'react-router-dom';
import TabNavbar from './TabNavbar';

const User = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='font-sans h-screen px-4 bg-[#B33C4A] selection:bg-[#FB7B9B] selection:text-black'>

      <button onClick={handleLogout} className="bg-red-500 w-30 mt-10 text-white p-3 rounded-xl ml-5">
        Logout
      </button>

      <TabNavbar />

      <h1 className='text-4xl text-center mt-10'>User Dashboard</h1>
      
      <p className='text-2xl mt-30 text-center'>Welcome Dashboard</p>
    </div>
  );
};

export default User;