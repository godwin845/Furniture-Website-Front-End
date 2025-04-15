import React from 'react'
import truck from '../assets/images/truck.svg'
import bag from '../assets/images/bag.svg'
import support from '../assets/images/support.svg'
import returns from '../assets/images/return.svg'
import whychoose from '../assets/images/why-choose-us-img.jpg'
import person1 from '../assets/images/person-1.jpg'

const About = () => {
  return (
    <div>
      {/* Why Choose Us */}
      <div className="px-4 md:px-20 py-16 bg-white">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <div className="mb-10">
              <h2 className="text-3xl font-semibold mb-2">Why Choose Us</h2>
              <p className="text-gray-500">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src={truck} alt="Shipping" className="mb-3" />
                <h6 className="text-lg font-semibold">Fast & Free Shipping</h6>
                <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada.</p>
              </div>
              <div>
                <img src={bag} alt="Easy to Shop" className="mb-3" />
                <h6 className="text-lg font-semibold">Easy to Shop</h6>
                <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada.</p>
              </div>
              <div>
                <img src={support} alt="Support" className="mb-3" />
                <h6 className="text-lg font-semibold">24/7 Support</h6>
                <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada.</p>
              </div>
              <div>
                <img src={returns} alt="Returns" className="mb-3" />
                <h6 className="text-lg font-semibold">Hassle Free Returns</h6>
                <p className="text-gray-500">Donec vitae odio quis nisl dapibus malesuada.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex items-center justify-center">
            <img src={whychoose} alt="Why choose us" className="rounded-2xl w-full max-w-sm" />
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gray-50 py-16 px-4 md:px-20">
        <h3 className="text-3xl text-center font-semibold mb-10">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {['1', '2', '3', '4'].map((person, i) => (
            <div key={i}>
              <img src={person1} alt={`Person ${person}`} className="mb-4 w-full" />
              <a href="/" className="text-xl font-bold block mb-1">Person {person}</a>
              <p className="font-medium">CEO, Founder, Atty.</p>
              <p className="text-gray-500 text-sm mt-2">Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
              <a href="/" className="text-black text-sm mt-2 inline-block">Learn More</a>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <h1 className="text-3xl text-center font-light mb-10">Testimonials</h1>
        <div className="px-4 md:px-20">
          {/* You can use a swiper/slider plugin here, for simplicity we'll just use a static slide */}
          {[1, 2, 3].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center mb-10">
              <p className="text-lg text-gray-700 max-w-2xl mb-6">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.”
              </p>
              <img src={person1} alt="Maria" className="w-[75px] rounded-full mb-3" />
              <h6 className="text-lg font-semibold">Maria Jones</h6>
              <p className="text-sm text-gray-500">CEO, Co-Founder, XYZ Inc.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About