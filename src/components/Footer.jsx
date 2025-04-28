import React from 'react';
import envelope from '../assets/images/envelope-outline.svg';
import sofa from '../assets/Sofa/Chaise Lounge Sofa.svg';
import { FaPaperPlane } from "react-icons/fa";
import logoImage from '../assets/logo.svg';

const Footer = () => {
  return (
    <div className='bg-[#FB7B9B] font-sans selection:bg-[#B33C4A] selection:text-white'>
         {/* Newsletter */}
              <div className="py-16 px-4 md:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div className="mb-10 lg:mb-0">
                    <h4 className="flex items-center text-xl font-semibold mb-4">
                      <img src={envelope} alt="Envelope" className="w-6 h-6 mr-2" />
                      Subscribe to Newsletter
                    </h4>
                    <form className="flex flex-col md:flex-row gap-4">
                      <input type="text" placeholder="Enter your name" className="p-3 border border-gray-300 rounded-lg w-full md:w-auto" />
                      <input type="email" placeholder="Enter your email" className="p-3 border border-gray-300 rounded-lg w-full md:w-auto" />
                      <button className="bg-[#B33C4A] text-white px-6 py-3 rounded-lg" type="submit">
                        <FaPaperPlane className='text-2xl' />
                      </button>
                    </form>
                  </div>
                  <img src={sofa} alt="Sofa" className="w-80 rounded-2xl" />
                </div>
              </div>
        
              {/* Footer */}
              <footer className="border-t pt-10 px-4 md:px-20">
                <div className="grid md:grid-cols-5 gap-8">
                  <div>
                    <img className='w-20 lg:w-30' src={logoImage} alt="" />
                    <p className="text-sm mt-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.</p>
                    <div className="flex space-x-4 mt-6 text-xl">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                  </div>
                  {[
                    ['About us', 'Service', 'Blog', 'Contact us'],
                    ['Support', 'Knowledge base', 'Live chat'],
                    ['Jobs', 'Our team', 'Leadership', 'Privacy policy'],
                    ['Nordic Chair', 'Kruzo Aero', 'Ergonomic Chair']
                  ].map((list, i) => (
                    <div key={i}>
                      <ul className="space-y-2 text-sm">
                        {list.map((item, j) => (
                          <li key={j}><a href="#">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
        
                <div className="flex flex-col md:flex-row justify-between items-center mt-10 pb-10 border-t pt-6 text-sm">
                  <div>
                    <p>©2023 All Rights Reserved — Furniture</p>
                  </div>
                  <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                  </div>
                </div>
              </footer>
    </div>
  );
};

export default Footer;