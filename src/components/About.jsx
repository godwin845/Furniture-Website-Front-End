import React from 'react';
import AboutBgImage from '../assets/AboutBg2.svg';
import HeartImage from '../assets/Hand Holding Heart.svg';
import StarsImage from '../assets/Stars.svg';
import LeafImage from '../assets/Leaf.svg';
import SofaImage from '../assets/Sofa.svg';

import AffordablePriceImage from '../assets/About/AffordablePrice.svg';
import EasyReturnsImage from '../assets/About/EasyReturns.svg';
import FreeShippingImage from '../assets/About/FreeShipping.svg';
import QualityImage from '../assets/About/Quality.svg';

const About = () => {
  return (
    <div className='font-sans selection:bg-[#FB7B9B] selection:text-black'
      style={{ backgroundImage: `url(${AboutBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="px-4 md:px-20 py-16">
      <div className="w-[1449px] mb-20 text-center justify-start text-black text-5xl font-extrabold">Welcome to DK Furnitures - Furnitures That Feels Like Home!</div>

      <div className="w-[1286px] h-44 text-justify justify-start text-white text-2xl font-black">At Dk Furniture, we believe that every home has a story, every space deserve comfort, and every person should live in a space that reflects who they are. Our mission is to bring you thoughtfully crafted, stylish, and sustainable furniture that turns your house into a home.</div>


      <div className="w-[1449px] mt-20 mb-10 text-center justify-start text-black text-5xl font-extrabold">Our Philosophy: Style with Soul</div>
      
      <img className='relative bottom-22 left-270' src={StarsImage} alt="" />

      <div className="w-[1286px] text-justify justify-start text-white text-2xl font-black">We’re not just a furniture brand- we’re lifestyle movement that celebrates individually, comfort, and conscious living. Our pieces are designed to match your lifestyle and elevate your everyday.</div>


      <div className="w-[1449px] mt-30 mb-10 text-center justify-start text-black text-5xl font-extrabold">What Makes Us Different?</div>

      <img className='relative bottom-27 left-255' src={LeafImage} alt="" />


      <div className="w-[1205px] h-36 text-justify justify-start text-white text-2xl font-black">Exclusive Designs : One of a kind pieces crafted by our in-house design team made to stand out in any space.</div>

      <div className="w-[1216px] h-36 text-justify justify-start text-white text-2xl font-black">Customer Care : Real people, ready to help before, during, and after your purchase.</div>

      <div className="w-[1216px] h-36 text-justify justify-start text-white text-2xl font-black">Customization : Tailored finishes, fabrics, and sizes to fit your style perfectly.</div>

      <div className="w-[1216px] h-36 text-justify justify-start text-white text-2xl font-black">Quality & Budget Value : Premium materials and craftmanship without the premium price tag.</div>

      <div className="w-[1449px] h-28 text-center justify-start text-black text-5xl font-extrabold">Why Choose Us?</div>
      
        <div className='flex justify-between mb-80 ml-10'>
          <div className="text-justify justify-start text-white text-3xl font-black">Quality</div>

          <div className="text-center justify-start text-white text-3xl font-extrabold">Easy returns</div>

          <div className="text-center justify-start text-white text-3xl font-extrabold">Affordable price</div>

          <div className="text-center justify-start text-white text-3xl font-extrabold">Free shipping</div>
        
        </div>

        <img className='relative bottom-90 right-10' src={QualityImage} alt="" />
        <img className='relative bottom-108 left-65' src={EasyReturnsImage} alt="" />
        <img className='relative bottom-125 left-160' src={AffordablePriceImage} alt="" />
        <img className='relative bottom-135 left-270' src={FreeShippingImage} alt="" />


      <div className="w-[1449px] text-center justify-start text-black text-5xl font-extrabold">Join The DK FURNITURES Community!</div>

      <img className='relative bottom-18 left-295' src={SofaImage} alt="" />

      
      <div className="w-[1228px] h-48 text-justify justify-start text-white text-2xl font-black">We’re here to help you reimagine your space-one beautiful piece at a time. With premium materials, versatile designs, and a heart for the environment, CozyNest is more than furniture-it’s comfort, style, and belonging in every corner.</div>

        <div className="w-[1449px] h-28 text-center justify-start text-black text-5xl font-extrabold">Because Your Space Deserves Love</div>
        
        <img className='relative bottom-36 left-280' src={HeartImage} alt="" />

      </div>
      
    </div>
  )
};

export default About;