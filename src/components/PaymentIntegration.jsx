import React from 'react';
import { useNavigate } from 'react-router-dom';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const handlePayment = async (amount, navigate) => {
  const res = await loadRazorpayScript();

  if (!res) {
    alert('Razorpay SDK failed to load. Check your internet connection.');
    return;
  }

  const options = {
    key: 'rzp_test_y226LCwZ8SpEQJ',
    amount: amount * 100,
    currency: 'INR',
    name: 'Worthy Skin',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    handler: () => {
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
      
      alert('Your order placed successfully!');
      navigate('/orders');
    },
    prefill: {
      name: 'Customer Name',
      email: 'customer@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#61dafb',
    },
    method: {
      netbanking: true,
      card: true,
      wallet: true,
      upi: true,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const PaymentIntegration = ({ amount }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => handlePayment(amount, navigate)} className="w-full bg-black text-white py-3 rounded-full font-bold">
        Pay with Razorpay
      </button>
    </div>
  );
};

export default PaymentIntegration;