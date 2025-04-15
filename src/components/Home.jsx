import React from 'react';
import product1 from '../assets/images/product-1.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import truck from '../assets/images/truck.svg';
import bag from '../assets/images/bag.svg';
import support from '../assets/images/support.svg';
import returns from '../assets/images/return.svg';
import whychoose from '../assets/images/why-choose-us-img.jpg';
import WorthySkinChatBot from './ChatBot';
import { useCart } from '../context/CartContext';

const Home = () => {
  
  const products = [
    { id: 1, name: 'Nordic Chair', price: 50.00, image: product1 },
    { id: 2, name: 'Kruzo Aero Chair', price: 78.00, image: product2 },
    { id: 3, name: 'Ergonomic Chair', price: 43.00, image: product3 },
  ];

  const { addToCart } = useCart();

  return (
    <div>
      {/* Second Section: Product Listing */}
      <div className="p-8 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-3xl font-medium">Crafted with excellent material.</h2>
            <p className="text-black/60 mt-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="mt-6">
              <button className="bg-black text-white py-2 px-6 rounded-full text-lg font-medium">Explore</button>
            </div>
          </div>

          {products.map((product) => (
            <div key={product.id} className="text-center">
              <a href="/" className="block">
                <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
                <h6 className="text-dark">{product.name}</h6>
                <h5 className="font-bold text-black">${product.price}</h5>
                <button 
                  onClick={() => addToCart(product)} 
                  className='px-4 py-2 bg-[#3b5d50] text-white rounded-full mt-2'>
                  Add to Cart
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section: Why Choose Us */}
      <div className="bg-gray-100 py-8 sm:py-12">
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

      <WorthySkinChatBot />
    </div>
  );
};

export default Home;