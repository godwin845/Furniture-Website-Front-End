import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginBg from '../assets/LoginBg.svg'
import axios from 'axios'
import { IoMdClose } from 'react-icons/io';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', { username, email, password });
      alert(response.data.message)
      navigate('/login');
    } catch (error) {
      console.error(error);
      setErrorMessage('Registeration failed!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-opacity-50">
      <div className="animate__animated animate__fadeInRight bg-white rounded-4xl p-8 w-[320px] max-w-[400px]">
        
        <h1 className="text-center text-black text-[25px] font-bold font-['Merriweather_Sans']">Register</h1>

        {errorMessage && (
          <div className="text-red-500 text-center mt-2">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mt-5 w-full h-[43px] relative rounded-[30px] outline outline-offset-[-1px] outline-[#1e1e1e] overflow-hidden">
            <input
              type="text"
              className="w-full h-full pl-[20px] pr-[10px] text-[#3e3535] text-[13px] font-normal font-['Merriweather_Sans'] outline-none"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mt-5 w-full h-[43px] relative rounded-[30px] outline outline-offset-[-1px] outline-[#1e1e1e] overflow-hidden">
            <input
              type="email"
              className="w-full h-full pl-[20px] pr-[10px] text-[#3e3535] text-[13px] font-normal font-['Merriweather_Sans'] outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-5 w-full h-[43px] relative rounded-[30px] outline outline-offset-[-1px] outline-black overflow-hidden">
            <input
              type="password"
              className="w-full h-full pl-[20px] pr-[10px] text-[#3e3535] text-[13px] font-normal font-['Merriweather_Sans'] outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-5 text-center w-full h-[43px] relative bg-[#3b5d50] text-white rounded-[35px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#918686]">
            <button type="submit" className="w-full h-full">Sign Up</button>
          </div>
        </form>

        <div className="flex justify-center mt-5">
          <div className="text-black text-xs font-normal font-['Merriweather_Sans']">Already have an account?</div>
          <Link to='/login' className="text-black text-xs font-extrabold font-['Merriweather_Sans'] ml-2 cursor-pointer">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;