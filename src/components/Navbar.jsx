import React, { useEffect, useState } from 'react';
import logoImage from '../assets/logo.svg';
import userImage from '../assets/User.svg';
import cartImage from '../assets/Cart.svg';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useCart } from '../context/CartContext';

const CustomNavbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { cartItems } = useCart();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  
  const isLoggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (!isLoggedIn) {
      // navigate('/login');
    }
  }, [isLoggedIn]);
  

  return (
    <nav className="absolute mt-5 font-sans">
      <div className="container mx-auto lg:flex items-center gap-70">
        <div className='flex items-center justify-between w-full lg:w-auto'>
          <Link to="/" className="text-white lg:text-4xl font-bold ml-5">
            <img className='w-20 lg:w-30' src={logoImage} alt="" />
          </Link>
          
          <NavLink to="/cart" className="relative lg:hidden ml-20">
              <p className='absolute bg-[#FB7B9B] rounded-2xl ml-4 bottom-7 text-white px-2 text-sm'>{cartItems.length}</p>
              <img src={cartImage} alt="Cart" className="h-10 w-10" />
          </NavLink>

          <Link to={isLoggedIn ? "/user" : "/login"} className='lg:hidden ml-5 sm:ml-40'>
              <img src={userImage} alt="User" className="h-8 w-10" />
          </Link>
          
          <GiHamburgerMenu onClick={toggleMobileMenu} className='lg:hidden ml-10 text-4xl text-white cursor-pointer' />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-20 text-base">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            HOME
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            FURNITURES
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            ABOUT US
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            CONTACT US
          </NavLink>

          <NavLink to="/cart" className="text-white relative ml-40">
            <p className='absolute bg-[#FB7B9B] rounded-2xl ml-8 bottom-11 text-white px-2 text-sm'>{cartItems.length}</p>
            <img src={cartImage} alt="Cart" className="h-15 w-15" />
          </NavLink>

          <Link to={isLoggedIn ? "/user" : "/login"} className="text-white">
            <img src={userImage} alt="User" className="h-10 w-10" />
          </Link>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-[#B33C4A] text-white transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-15">
          <div className="flex justify-between items-center mb-10">
            <IoMdClose onClick={toggleMobileMenu} className="text-3xl cursor-pointer text-end ml-40" />
          </div>

          <div className="flex flex-col space-y-8 text-lg">
            <NavLink to="/" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              Home
            </NavLink>
            <NavLink to="/shop" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              Shop
            </NavLink>
            <NavLink to="/about" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;