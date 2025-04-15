import React from 'react'
import envelope from '../assets/images/envelope-outline.svg'
import sofa from '../assets/images/sofa.png'
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
         {/* Newsletter */}
              <div className="bg-white py-16 px-4 md:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  <div className="mb-10 lg:mb-0">
                    <h4 className="flex items-center text-xl font-semibold mb-4">
                      <img src={envelope} alt="Envelope" className="w-6 h-6 mr-2" />
                      Subscribe to Newsletter
                    </h4>
                    <form className="flex flex-col md:flex-row gap-4">
                      <input type="text" placeholder="Enter your name" className="p-3 border border-gray-300 rounded-lg w-full md:w-auto" />
                      <input type="email" placeholder="Enter your email" className="p-3 border border-gray-300 rounded-lg w-full md:w-auto" />
                      <button className="bg-[#3b5d50] text-white px-6 py-3 rounded-lg" type="submit">
                        <FaPaperPlane className='text-2xl' />
                      </button>
                    </form>
                  </div>
                  <img src={sofa} alt="Sofa" className="w-80" />
                </div>
              </div>
        
              {/* Footer */}
              <footer className="bg-white border-t pt-10 px-4 md:px-20">
                <div className="grid md:grid-cols-5 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold">Furni.</h3>
                    <p className="text-gray-500 text-sm mt-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.</p>
                    <div className="flex space-x-4 mt-6 text-xl">
                      <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="/"><i className="fa-brands fa-twitter"></i></a>
                      <a href="/"><i className="fa-brands fa-instagram"></i></a>
                      <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                  </div>
                  {[
                    ['About us', 'Service', 'Blog', 'Contact us'],
                    ['Support', 'Knowledge base', 'Live chat'],
                    ['Jobs', 'Our team', 'Leadership', 'Privacy policy'],
                    ['Nordic Chair', 'Kruzo Aero', 'Ergonomic Chair']
                  ].map((list, i) => (
                    <div key={i}>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {list.map((item, j) => (
                          <li key={j}><a href="/">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
        
                <div className="flex flex-col md:flex-row justify-between items-center mt-10 pb-10 border-t pt-6 text-sm text-gray-500">
                  <div>
                    <p>©2023 All Rights Reserved — Designed with love by Untree.co</p>
                    <p>Distributed By Ambareesh</p>
                  </div>
                  <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Privacy Policy</a>
                  </div>
                </div>
              </footer>
    </div>
  )
}

export default Footer