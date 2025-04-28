import React, { useEffect, useState } from 'react';

import product1 from '../assets/Dining/Chesterfield Dining Table.svg';
import product2 from '../assets/Dining/Drop Leaf Dining Table.svg';
import product3 from '../assets/Dining/Glass Dining Table.svg';
import product4 from '../assets/Dining/Mid Century Dining Table.svg';
import product5 from '../assets/Dining/Square Dining Table.svg';

import product6 from '../assets/Dressing/Circle Charm Dressing Table.svg';
import product7 from '../assets/Dressing/Glamour Sphere Dressing Table.svg';
import product8 from '../assets/Dressing/Moonlit Dressing Table.svg';
import product9 from '../assets/Dressing/Orbit Console Dressing Table.svg';
import product10 from '../assets/Dressing/Radiant Dressing Table.svg';

import product11 from '../assets/Wardrobe/Bespoke Wardrobe.svg';
import product12 from '../assets/Wardrobe/Glass Wardrobe.svg';
import product13 from '../assets/Wardrobe/Hinged Wardrobe.svg';
import product14 from '../assets/Wardrobe/Mirror Wardrobe.svg';
import product15 from '../assets/Wardrobe/Sliding Wardrobe.svg';
import product16 from '../assets/Wardrobe/Wooden Wardrobe.svg';

import product17 from '../assets/Sofa/Camelback Sofa.svg';
import product18 from '../assets/Sofa/Chaise Lounge Sofa.svg';
import product19 from '../assets/Sofa/Chester Field Sofa.svg';
import product20 from '../assets/Sofa/Futon Sofa.svg';
import product21 from '../assets/Sofa/Sectional Sofa.svg';
import product22 from '../assets/Sofa/Tuxedo Sofa.svg';

import product23 from '../assets/Table/Custom Laptop Table.svg';
import product24 from '../assets/Table/Luxury Glass Gold Table.svg';
import product25 from '../assets/Table/Metal Table.svg';
import product26 from '../assets/Table/Wooden Coffee Table.svg';
import product27 from '../assets/Table/Wooden Slide Table.svg';
import product28 from '../assets/Table/Wooden Writing Table.svg';

import product29 from '../assets/BookShelves/Customized Tree book Shelve.svg';
import product30 from '../assets/BookShelves/Free Standing Book Shelves.svg';
import product31 from '../assets/BookShelves/Ladder-Style Wooden Bookshelf.svg';
import product32 from '../assets/BookShelves/Modular Wooden Bookshelf.svg';
import product33 from '../assets/BookShelves/Wall Mounted Book Shelves.svg';
import product34 from '../assets/BookShelves/Wooden Side Book Shelves.svg';

import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

const products = [
  { id: 1, name: 'Chesterfield Dining Table', type: "Dining", price: 50.00, image: product1 },
  { id: 2, name: 'Drop Leaf Dining Table', type: "Dining", price: 50.00, image: product2 },
  { id: 3, name: 'Glass Dining Table', type: "Dining", price: 78.00, image: product3 },
  { id: 4, name: 'Mid Century Dining Table', type: "Dining", price: 43.00, image: product4 },
  { id: 5, name: 'Square Dining Table', type: "Dining", price: 50.00, image: product5 },

  { id: 6, name: 'Circle Charm Dressing Table', type: "Dressing", price: 50.00, image: product6 },
  { id: 7, name: 'Glamour Sphere Dressing Table', type: "Dressing", price: 78.00, image: product7 },
  { id: 8, name: 'Moonlit Dressing Table', type: "Dressing", price: 50.00, image: product8 },
  { id: 9, name: 'Orbit Console Dressing Table', type: "Dressing", price: 30.00, image: product9 },
  { id: 10, name: 'Radiant Dressing Table', type: "Dressing", price: 40.00, image: product10 },

  { id: 11, name: 'Bespoke Wardrobe', type: "Wardrobe", price: 45.00, image: product11 },
  { id: 12, name: 'Glass Wardrobe', type: "Wardrobe", price: 35.00, image: product12 },
  { id: 13, name: 'Hinged Wardrobe', type: "Wardrobe", price: 30.00, image: product13 },
  { id: 14, name: 'Mirror Wardrobe', type: "Wardrobe", price: 32.00, image: product14 },
  { id: 15, name: 'Sliding Wardrobe', type: "Wardrobe", price: 36.00, image: product15 },
  { id: 16, name: 'Wooden Wardrobe', type: "Wardrobe", price: 50.00, image: product16 },

  { id: 17, name: 'Camelback Sofa', type: "Sofa", price: 41.00, image: product17 },
  { id: 18, name: 'Chaise Lounge Sofa', type: "Sofa", price: 46.00, image: product18 },
  { id: 19, name: 'Chester Field Sofa', type: "Sofa", price: 48.00, image: product19 },
  { id: 20, name: 'Futon Sofa', type: "Sofa", price: 48.00, image: product20 },
  { id: 21, name: 'Sectional Sofa', type: "Sofa", price: 48.00, image: product21 },
  { id: 22, name: 'Tuxedo Sofa', type: "Sofa", price: 48.00, image: product22 },

  { id: 23, name: 'Custom Laptop Table', type: "Table", price: 48.00, image: product23 },
  { id: 24, name: 'Luxury Glass Gold Table', type: "Table", price: 40.00, image: product24 },
  { id: 25, name: 'Metal Table', type: "Table", price: 35.00, image: product25 },
  { id: 26, name: 'Wooden Coffee Table', type: "Table", price: 42.00, image: product26 },
  { id: 27, name: 'Wooden Slide Table', type: "Table", price: 32.00, image: product27 },
  { id: 28, name: 'Wooden Writing Table', type: "Table", price: 50.00, image: product28 },

  { id: 29, name: 'Customized Tree book Shelve', type: "Bookshelf", price: 48.00, image: product29 },
  { id: 30, name: 'Free Standing Book Shelves.svg', type: "Bookshelf", price: 30.00, image: product30 },
  { id: 31, name: 'Ladder-Style Wooden Bookshelf', type: "Bookshelf", price: 42.00, image: product31 },
  { id: 32, name: 'Modular Wooden Bookshelf', type: "Bookshelf", price: 36.00, image: product32 },
  { id: 33, name: 'Wall Mounted Book Shelves', type: "Bookshelf", price: 38.00, image: product33 },
  { id: 34, name: 'Wooden Side Book Shelves', type: "Bookshelf", price: 55.00, image: product34 },
];

const Shop = () => {

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");

    if (type && ["Dining", "Dressing", "Wardrobe", "Sofa", "Table", "Bookshelf"].includes(type)) {
      handleTypeChange(type);
    }
  }, [location.search]);


  const { addToCart } = useCart();

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedType, setSelectedType] = useState("All");

  const handleTypeChange = (type) => {
    setSelectedType(type);
    if (type === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.type === type));
    }
  };

  return (
    <div>
      <div className='py-5 bg-[#FB7B9B] font-sans selection:bg-[#B33C4A] selection:text-white'>

        <h1 className='text-4xl text-center mt-5 mb-20'>Shop Our Products</h1>

        <div className='text-center mb-10 text-white'>
          <button onClick={() => handleTypeChange("All")} className={`${selectedType === "All" ? 'bg-[#B33C4A]' : 'bg-gray-500'} p-2 w-30 bg-[#B33C4A] rounded-xl text-xl`}>All</button>
          <button onClick={() => handleTypeChange("Dining")} className={`${selectedType === "Dining" ? 'bg-[#B33C4A]' : 'bg-gray-500'} p-2 w-30 bg-[#B33C4A] rounded-xl text-xl ml-5`}>Dining</button>
          <button onClick={() => handleTypeChange("Dressing")} className={`${selectedType === "Dressing" ? 'bg-[#B33C4A]' : 'bg-gray-500'} p-2 w-30 bg-[#B33C4A] rounded-xl text-xl ml-5`}>Dressing</button>
          <button onClick={() => handleTypeChange("Wardrobe")} className={`${selectedType === "Wardrobe" ? 'bg-[#B33C4A]' : 'bg-gray-500'} p-2 w-30 bg-[#B33C4A] rounded-xl text-xl ml-5`}>Wardrobe</button>
          <button onClick={() => handleTypeChange("Sofa")} className={`${selectedType === "Sofa" ? 'bg-[#B33C4A]' : 'bg-gray-500'} p-2 w-30 bg-[#B33C4A] rounded-xl text-xl ml-5`}>Sofa</button>
          <button onClick={() => handleTypeChange("Table")} className={`${selectedType === "Table" ? 'bg-[#B33C4A]' : 'bg-gray-500'} p-2 w-30 bg-[#B33C4A] rounded-xl text-xl ml-5`}>Table</button>
          <button onClick={() => handleTypeChange("Bookshelf")} className={`${selectedType === "Bookshelf" ? 'bg-[#B33C4A]' : 'bg-gray-500'} p-2 w-30 bg-[#B33C4A] rounded-xl text-xl ml-5`}>Bookshelf</button>
        </div>

        <div className='py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          {filteredProducts.map((product) => (
            <div key={product.id} className='text-center rounded-2xl mt-5 ml-5 transition-transform duration-300 transform hover:scale-105'>
              <div data-aos="fade-up"  className='text-decoration-none'>
                <img src={product.image} alt={product.name} className='w-80 h-80 object-cover rounded-2xl' />
                <h6 className='text-dark mt-3'>{product.name}</h6>
                <h5 className='font-bold'>${product.price.toFixed(2)}</h5>
                <button onClick={() => addToCart(product)} className='px-4 py-2 bg-[#B33C4A] text-white rounded-full mt-2'>
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