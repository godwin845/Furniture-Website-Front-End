import React, { useEffect, useState } from 'react';
import userImage from '../assets/images/user.svg';
import cartImage from '../assets/images/cart.svg';
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
    <nav className="bg-[#3b5d50] px-10 py-10 relative">
      <div className="container mx-auto lg:flex items-center justify-between">
        <div className='flex items-center justify-between w-full lg:w-auto'>
          <Link to="/" className="text-white text-4xl font-bold">
            Furniture
          </Link>
          <Link to={isLoggedIn ? "/user" : "/login"} className='lg:hidden sm:ml-40'>
              <img src={userImage} alt="User" className="h-6 w-6" />
            </Link>
          <NavLink to="/cart" className="relative lg:hidden">
              <p className='absolute bg-green-500 rounded-2xl ml-4 bottom-4 text-white px-2 text-sm'>{cartItems.length}</p>
              <img src={cartImage} alt="Cart" className="h-6 w-6" />
          </NavLink>
          <GiHamburgerMenu onClick={toggleMobileMenu} className='lg:hidden text-4xl text-white cursor-pointer' />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 text-base">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            Services
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
            Contact Us
          </NavLink>

          <Link to={isLoggedIn ? "/user" : "/login"} className="text-white">
            <img src={userImage} alt="User" className="h-6 w-6" />
          </Link>

          <NavLink to="/cart" className="text-white relative">
            <p className='absolute bg-green-500 rounded-2xl ml-4 bottom-4 text-white px-2 text-sm'>{cartItems.length}</p>
            <img src={cartImage} alt="Cart" className="h-6 w-6" />
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-[#3b5d50] text-white transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-15">
          <div className="flex justify-between items-center mb-10">
            <IoMdClose onClick={toggleMobileMenu} className="text-3xl cursor-pointer text-end ml-40" />
          </div>

          <div className="flex flex-col space-y-4 text-lg">
            <NavLink to="/" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              Home
            </NavLink>
            <NavLink to="/shop" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              Shop
            </NavLink>
            <NavLink to="/about" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              About
            </NavLink>
            <NavLink to="/services" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              Services
            </NavLink>
            <NavLink to="/blog" onClick={toggleMobileMenu} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-300'}>
              Blog
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