import React from 'react';
import AboutBg from '../assets/AboutBg.svg';

const Component = () => {
  return (
    <div className="text-white px-2 md:px-20 py-6 md:py-8 h-screen font-sans" 
    style={{ backgroundImage: `url(${AboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      <div className="container mx-auto selection:bg-[#FB7B9B] selection:text-black">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Text Content */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="flex flex-col gap-4 justify-center lg:text-left mt-50 lg:ml-180">
            <div className="lg:w-[500px] text-center ml-5 justify-start text-white text-2xl lg:text-6xl font-normal">TRANSFORM YOUR SPACE WITH ELEGANCE</div>
              
            <div className="lg:w-[457px] mt-5 text-center ml-10 justify-start text-white text-xl lg:text-2xl font-normal">Beauty your home and choose from a wide variety of modern simplistic and premium quality furnitures</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;