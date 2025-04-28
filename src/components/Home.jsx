import React from 'react';
import product1 from '../assets/NewArrivals/Classy Book Shelves.svg';
import product2 from '../assets/NewArrivals/Modern Arm Chair.svg';
import product3 from '../assets/NewArrivals/Modern Table.svg';
import product4 from '../assets/NewArrivals/Shoe Rack.svg';
import truck from '../assets/images/truck.svg';
import bag from '../assets/images/bag.svg';
import support from '../assets/images/support.svg';
import returns from '../assets/images/return.svg';
import whychoose from '../assets/Sofa/Futon Sofa.svg';
import { useCart } from '../context/CartContext';
import FurnitureChatBot from './ChatBot';

const products = [
  { id: 1, name: 'Nordic Chair', price: 50.00, image: product1 },
  { id: 2, name: 'Kruzo Aero Chair', price: 78.00, image: product2 },
  { id: 3, name: 'Ergonomic Chair', price: 43.00, image: product3 },
  { id: 3, name: 'Ergonomic Chair', price: 43.00, image: product4 },
];

const Home = () => {

  const { addToCart } = useCart();

  return (
    <div className='bg-[#FB7B9B] font-sans selection:bg-[#B33C4A] selection:text-white'>
      {/* Second Section: Product Listing */}
      <div className="p-8 sm:p-10">

        <h1 className='text-4xl text-center mb-10'>New Arrivals</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-3xl font-medium">Crafted with excellent material.</h2>
            <p className="text-black/60 mt-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="mt-6">
              <button className="bg-[#B33C4A] text-white py-2 px-6 rounded-full text-lg font-medium">Explore</button>
            </div>
          </div>

          {products.map((product) => (
            <div key={product.id} className="text-center rounded-2xl mt-5 ml-5 transition-transform duration-300 transform hover:scale-105">
              <div className="block">
                <img src={product.image} alt={product.name} className="w-80 h-80 object-cover rounded-2xl mb-4" />
                <h6 className="text-dark">{product.name}</h6>
                <h5 className="font-bold text-black">${product.price}</h5>
                <button 
                  onClick={() => addToCart(product)} 
                  className='px-4 py-2 bg-[#B33C4A] text-white rounded-full mt-2'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section: Why Choose Us */}
      <div className="bg-[#FB7B9B] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-medium">Why Choose Us</h2>
            <p className="text-black/60 mt-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-6">
              {[
                { src: truck, title: 'Fast & Free Shipping' },
                { src: bag, title: 'Easy to Shop' },
                { src: support, title: '24/7 Support' },
                { src: returns, title: 'Hassle Free Returns' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <img src={item.src} alt={item.title} className="mx-auto mb-4 w-16 h-16" />
                  <h6 className="font-medium">{item.title}</h6>
                  <p className="text-black/60">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={whychoose} alt="Why Choose Us" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

      <FurnitureChatBot />
    </div>
  );
};

export default Home;