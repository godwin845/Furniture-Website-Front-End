import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    console.log('Orders fetched from localStorage:', storedOrders);
    setOrders(storedOrders);
  }, []);

  const cancelOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.orderId !== orderId);
  
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    alert('Your order has been cancelled!');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="font-sans px-4 mt-10 mb-10">
      <button onClick={handleLogout} className="bg-red-500 w-30 text-white p-3 rounded-xl ml-5">
        Logout
      </button>

      <div className='mt-10'>
        <Link to='/user'><button className='bg-[#3b5d50] w-30 text-white p-3 rounded-xl ml-5'>Dashboard</button></Link>
        <Link to='/orders'><button className='bg-[#3b5d50] w-30 text-white p-3 rounded-xl ml-5'>My Orders</button></Link>
      </div>

      <h1 className="text-4xl mb-4 text-center mt-10">Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <ul className="list-none mt-10">
          {orders.map((order, index) => (
            <li key={index} className="border border-gray-300 p-5 mb-4 inline-block w-72 ml-5">
              <p><span className='font-bold'>Order ID:</span> {order.orderId}</p>
              <p><span className='font-bold'>Payment ID:</span> {order.paymentId}</p>
              <p><span className='font-bold'>Amount Paid:</span> ₹{order.amount}</p>
              <p><span className='font-bold'>Date:</span> {order.date}</p>
              <p><span className='font-bold'>Delivery Date:</span> {order.deliveryDate}</p>

              {/* Shipping Address with a check for undefined or null */}
              {order.shippingAddress ? (
                <div>
                  <span className='font-bold'>Shipping Address:</span>
                  <p>{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
                </div>
              ) : (
                <p>Shipping Address is unavailable</p>
              )}

              {/* Order Details (Products, Amount, etc.) */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">Your Order</h3>
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-2">Product</th>
                      <th className="pb-2">Quantity</th>
                      <th className="pb-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                  {order.products?.length > 0 ? (
                    order.products.map((product, index) => (
                      <tr key={index} className="border-b">
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>₹{(product.price * product.quantity).toFixed(2)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-b">
                      <td colSpan="3">No products found in this order</td>
                    </tr>
                  )}

                    <tr className="font-semibold">
                      <td colSpan="2">Order Total</td>
                      <td>₹{order.amount || '0.00'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Cancel Order Button */}
              <button
                onClick={() => cancelOrder(order.orderId)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderPage;