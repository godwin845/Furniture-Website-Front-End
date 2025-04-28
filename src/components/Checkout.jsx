import React, { useState, useEffect } from 'react';
import PaymentIntegration from './PaymentIntegration';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    state: '',
    city: '',
    zip: '',
    email: '',
    phone: '',
    createAccount: false,
    shipToDifferentAddress: false,
    orderNotes: '',
  });

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (storedCartItems.length === 0) {
      alert('Your cart is empty. Please add items to proceed with checkout.');
      window.location.href = '/cart'; // Optionally redirect to the cart page
    } else {
      setCartItems(storedCartItems);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Fix the getCartTotal function to handle item.price properly
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace('₹', '').trim()) : item.price;
      return total + price * item.quantity;
    }, 0);
  };

  const getDiscount = () => {
    return getCartTotal() * 0.10; // Assuming a 10% discount
  };

  const getFinalTotal = () => {
    return getCartTotal() - getDiscount();
  };

  const getDeliveryDate = () => {
    const deliveryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    return deliveryDate.toLocaleDateString();
  };

  const handlePlaceOrder = () => {
    if (
      !billingDetails.firstName ||
      !billingDetails.lastName ||
      !billingDetails.address ||
      !billingDetails.state ||
      !billingDetails.city ||
      !billingDetails.zip ||
      !billingDetails.email ||
      !billingDetails.phone
    ) {
      alert('Please fill in all the billing details');
      return;
    }
  
    const orderData = {
      orderId: `ORD${Date.now()}`,
      paymentId: `PAY${Date.now()}`,
      amount: getFinalTotal().toFixed(2),
      billingDetails,
      date: new Date().toLocaleString(),
      deliveryDate: getDeliveryDate(),
      products: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: typeof item.price === 'string' ? parseFloat(item.price.replace('₹', '').trim()) : item.price
      })),
      shippingAddress: {
        name: `${billingDetails.firstName} ${billingDetails.lastName}`,
        address: billingDetails.address,
        city: billingDetails.city,
        state: billingDetails.state,
        zip: billingDetails.zip
      }
    };
  
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    storedOrders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(storedOrders));
  
    // Clear the cart after placing the order
    localStorage.setItem('cartItems', JSON.stringify([]));
    setCartItems([]); // Ensure cart state is updated immediately
  };  

  return (
    <div className="font-sans bg-[#FB7B9B] selection:bg-[#B33C4A] selection:text-white">
      <div className="px-4 md:px-20 py-10">

        <h1 className='text-4xl text-center font-semibold mt-5 mb-20'>Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Billing Details */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Billing Details</h3>
            <form className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <label className="block mb-1 font-medium">Country</label>
                <select className="w-full border border-gray-300 rounded px-4 py-2">
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>Canada</option>
                  <option>UAE</option>
                  <option>USA</option>
                </select>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block mb-1 font-medium">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={billingDetails.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    placeholder="First name"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1 font-medium">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={billingDetails.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={billingDetails.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
                  placeholder="Street address"
                />
                <input
                  type="text"
                  name="apartment"
                  value={billingDetails.apartment}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block mb-1 font-medium">State</label>
                  <input
                    type="text"
                    name="state"
                    value={billingDetails.state}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1 font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={billingDetails.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block mb-1 font-medium">Postal / Zip</label>
                  <input
                    type="number"
                    name="zip"
                    value={billingDetails.zip}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={billingDetails.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block mb-1 font-medium">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={billingDetails.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Order Notes</label>
                <textarea
                  name="orderNotes"
                  value={billingDetails.orderNotes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  rows={4}
                />
              </div>
            </form>
          </div>

          {/* Coupon & Order Summary */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Your Order</h3>
              <form className="bg-white p-6 rounded-lg shadow space-y-6">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-2">Product</th>
                      <th className="pb-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td>{item.name} <span className="font-bold">x</span> {item.quantity}</td>
                        <td>${`${item.price}`}</td>
                      </tr>
                    ))}
                    <tr className="border-b font-semibold">
                      <td>Cart Subtotal</td>
                      <td>${`${getCartTotal().toFixed(2)}`}</td>
                    </tr>
                    <tr className="font-semibold">
                      <td>Order Total</td>
                      <td>${`${getFinalTotal().toFixed(2)}`}</td>
                    </tr>
                  </tbody>
                </table>

              </form>

              <div
                  onClick={handlePlaceOrder}
                >
                  <PaymentIntegration amount={getFinalTotal().toFixed(2)} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;