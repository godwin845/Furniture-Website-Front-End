import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const User = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='font-sans h-screen mt-10 px-4'>

      <button onClick={handleLogout} className="bg-red-500 w-30 text-white p-3 rounded-xl ml-5">
        Logout
      </button>

      <div className='mt-10'>
        <Link to='/user'><button className='bg-[#3b5d50] w-30 text-white p-3 rounded-xl ml-5'>Dashboard</button></Link>
        <Link to='/orders'><button className='bg-[#3b5d50] w-30 text-white p-3 rounded-xl ml-5'>My Orders</button></Link>
      </div>

      <h1 className='text-4xl text-center mt-10'>User Dashboard</h1>
      
      <p className='text-2xl mt-30 text-center'>Welcome Dashboard</p>
    </div>
  )
}

export default User