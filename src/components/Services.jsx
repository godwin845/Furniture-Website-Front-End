import React from 'react';
import truck from '../assets/images/truck.svg'
import bag from '../assets/images/bag.svg'
import support from '../assets/images/support.svg'
import returns from '../assets/images/return.svg'
import product1 from '../assets/images/product-1.png'
import product2 from '../assets/images/product-2.png'
import product3 from '../assets/images/product-3.png'
import person1 from '../assets/images/person-1.jpg'

const Services = () => {
  return (
    <div>
      <div className="py-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img src={truck} className="mx-auto" alt="Fast Shipping" />
            <h6 className="text-lg font-semibold mt-4">Fast & Free Shipping</h6>
            <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className="text-center">
            <img src={bag} className="mx-auto" alt="Easy to Shop" />
            <h6 className="text-lg font-semibold mt-4">Easy to Shop</h6>
            <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className="text-center">
            <img src={support} className="mx-auto" alt="24/7 Support" />
            <h6 className="text-lg font-semibold mt-4">24/7 Support</h6>
            <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
          <div className="text-center">
            <img src={returns} className="mx-auto" alt="Hassle Free Returns" />
            <h6 className="text-lg font-semibold mt-4">Hassle Free Returns</h6>
            <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl font-semibold">Crafted with excellent material.</h2>
            <p className="text-gray-500 mt-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet
              dolor tempor tristique.
            </p>
            <div className="mt-6">
              <button className="bg-gray-900 text-white py-2 px-6 rounded-full text-lg">
                Explore
              </button>
            </div>
          </div>
          <div className="text-center">
            <a href="/dfdg" className="block">
              <img src={product1} alt="Nordic Chair" className="mx-auto" />
              <h6 className="text-lg font-medium mt-4">Nordic Chair</h6>
            </a>
          </div>
          <div className="text-center">
            <a href="/dfdg" className="block">
              <img src={product2} alt="Kruzo Aero Chair" className="mx-auto" />
              <h6 className="text-lg font-medium mt-4">Kruzo Aero Chair</h6>
            </a>
          </div>
          <div className="text-center">
            <a href="/dfdg" className="block">
              <img src={product3} alt="Ergonomic Chair" className="mx-auto" />
              <h6 className="text-lg font-medium mt-4">Ergonomic Chair</h6>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-20">
        <h1 className="text-4xl font-light text-center mb-12">Testimonials</h1>
        <div className="carousel p-5">
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center w-3/4">
              <p className="text-lg text-white py-4">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.”
              </p>
              <img src={person1} className="mx-auto rounded-full w-20 h-20" alt="Maria Jones" />
              <h6 className="pt-4">Maria Jones</h6>
              <p>CEO, Co-Founder, XYZ Inc.</p>
            </div>
            {/* Repeat the above block for other testimonials */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;