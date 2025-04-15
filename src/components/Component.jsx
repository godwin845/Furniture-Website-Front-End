import React from 'react'
import homeImage from '../assets/images/couch.png'

const Component = () => {
  return (
    <div className="bg-[#3b5d50] text-white px-2 md:px-20 py-6 md:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Text Content */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="flex flex-col gap-4 justify-center lg:text-left">
              <h1 className="text-4xl font-bold">Shop Products</h1>
              <p className="text-white/70">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="bg-yellow-400 text-black font-medium rounded-full px-6 py-2 text-lg">
                  Shop Now
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-black font-medium rounded-full px-6 py-2 text-lg">
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-7/12 mt-6 lg:mt-0">
            <img src={homeImage} alt="Home" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Component