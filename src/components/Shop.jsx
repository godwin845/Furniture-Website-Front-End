import React from 'react';
import product1 from '../assets/images/product-1.png';
import product2 from '../assets/images/product-2.png';
import product3 from '../assets/images/product-3.png';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Nordic Chair', price: 50.00, image: product1 },
  { id: 2, name: 'Nordic Chair', price: 50.00, image: product2 },
  { id: 3, name: 'Kruzo Aero Chair', price: 78.00, image: product3 },
  { id: 4, name: 'Ergonomic Chair', price: 43.00, image: product3 },
  { id: 5, name: 'Nordic Chair', price: 50.00, image: product3 },
  { id: 6, name: 'Nordic Chair', price: 50.00, image: product1 },
  { id: 7, name: 'Kruzo Aero Chair', price: 78.00, image: product2 },
  { id: 8, name: 'Ergonomic Chair', price: 43.00, image: product3 },
];

const Shop = () => {

  const { addToCart } = useCart();

  return (
    <div>
      <div className='py-5'>
        <div className='py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          {products.map((product) => (
            <div key={product.id} className='text-center'>
              <div className='text-decoration-none'>
                <img src={product.image} alt={product.name} className='w-full' />
                <h6 className='text-dark'>{product.name}</h6>
                <h5 className='font-bold text-black'>${product.price.toFixed(2)}</h5>
                <button onClick={() => addToCart(product)} className='px-4 py-2 bg-[#3b5d50] text-white rounded-full mt-2'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;