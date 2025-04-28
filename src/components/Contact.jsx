import React from 'react';
import ContactImage from '../assets/Contact.svg';

const Contact = () => {
  return (
    <div className='text-white p-1 font-sans selection:bg-[#FB7B9B] selection:text-black'
      style={{ backgroundImage: `url(${ContactImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      <div className='text-center mt-10'>
        <div className="text-white font-semibold text-4xl font-sans">Get In Touch With Us</div>
        <div className="lg:w-[615px] mt-5 font-semibold lg:ml-120 h-16 text-white text-base font-sans">We’re here for all your furniture needs! Contact us for any product inquiries, <br/>design tips, or assistance—we’d love to hear from you!</div>
      </div>

      {/* Contact Form */}
      <div className="px-5 md:px-20 py-12">
        <div className="max-w-4xl mx-auto">
          <form className="space-y-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input type='name' className="w-96 h-10 lg:ml-65 text-black text-center bg-white rounded-[20px] font-semibold" placeholder='Enter your name' />
              </div>
            </div>
            <div>
              <input type='email' className="w-96 h-10 text-black text-center bg-white rounded-[20px] font-semibold" placeholder='Enter your email' />
            </div>
            <div>
              <textarea className="w-96 h-64 text-black bg-white rounded-[20px] pt-25 text-center font-semibold" placeholder='Leave your message' />
            </div>
            <div>
              <button type="submit" className="bg-[#B33C4A] text-white py-3 px-8 rounded-full text-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;