import React from 'react'

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Our Food Haven
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            At YumFood, we are passionate about bringing you the best culinary experiences. Our mission is to provide high-quality, delicious food that satisfies your taste buds and nourishes your soul.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            className="w-full max-w-sm rounded-lg shadow-lg"
            src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp"
            alt="Delicious food"
          />
        </div>
      </div>
    </div>
  )
}

export default About
