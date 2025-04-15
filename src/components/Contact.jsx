import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Contact Info */}
      <div className="py-12 text-center bg-gray-100">
        <div className="container mx-auto flex justify-center gap-8 text-lg">
          <div className="flex items-center">
            <i className="fa-solid fa-location-dot fa-lg"></i>
            <p className="px-3">43 Raymouth Rd. Baltemoer, London 3910</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-envelope fa-lg"></i>
            <p className="px-3">info@yourdomain.co</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-phone fa-lg"></i>
            <p className="px-3">+1 294 3925 3939</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-5 md:px-20 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className='text-4xl text-center mb-15'>Contact Us</h1>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="first-name" className="block text-lg font-medium mb-2">First name</label>
                <input type="text" id="first-name" className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b5d50]" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-lg font-medium mb-2">Last name</label>
                <input type="text" id="last-name" className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b5d50]" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b5d50]" />
            </div>
            <div>
              <label htmlFor="comments" className="block text-lg font-medium mb-2">Comments</label>
              <textarea id="comments" rows="4" className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b5d50]"></textarea>
            </div>
            <div>
              <button type="submit" className="bg-[#3b5d50] text-white py-3 px-8 rounded-full text-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;