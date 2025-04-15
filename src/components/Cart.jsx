import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const isLoggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (!isLoggedIn) {
      // navigate('/login');
    }
  }, [isLoggedIn]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (

    <div className="font-sans">
      <h1 className='text-4xl font-semibold mt-5'>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="mt-4 mb-5">Looks like you haven't added anything to your cart yet.</p>
          <Link to='/' className="mt-6 bg-black text-white px-6 py-3 rounded-full">Continue Shopping</Link>
        </div>
      ) : (
        <>
          {/* Cart Table */}
          <div className="py-12 border-b border-gray-300">
            <div className="overflow-x-auto px-4 md:px-20">
              <button onClick={clearCart} className='bg-black text-white px-6 py-3 rounded-full ml-300 mb-10'>Clear All</button>
              <table className="w-full text-left text-black">
                <thead className="text-lg border-b-2 border-gray-400">
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="text-base divide-y divide-gray-300">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td><img src={item.image} alt={item.name} className="w-36" /></td>
                      <td>{item.name}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className="flex items-center justify-center space-x-2">
                          <button onClick={() => decreaseQuantity(item)} className="px-2 text-xl">-</button>
                          <input readOnly value={item.quantity} className="w-12 text-center border border-gray-300" />
                          <button onClick={() => increaseQuantity(item)} className="px-2 text-xl">+</button>
                        </div>
                      </td>
                      <td>${(item.quantity * item.price).toFixed(2)}</td>
                      <td>
                        <button
                          onClick={() => removeCart(item)}
                          className="text-red-500 font-bold"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cart Controls & Summary */}
          <div className="px-4 md:px-20 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div>
                <h4 className="text-xl font-semibold mt-10">Coupon</h4>
                <p className="mb-4">Enter your coupon code if you have one.</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <input type="text" placeholder="Coupon Code" className="border border-gray-300 rounded px-4 py-2 w-full sm:w-auto" />
                  <button className="bg-black text-white px-6 py-3 rounded-full">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="border p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold border-b pb-4 mb-4">CART TOTALS</h3>
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Total</span>
                <span className="font-semibold">${(subtotal + 4).toFixed(2)}</span>
              </div>
              <div className="mt-6">
                <Link to={isLoggedIn ? "/checkout" : "/login"} className="block text-center bg-black text-white py-3 rounded-full font-semibold text-lg">Proceed To Checkout</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;