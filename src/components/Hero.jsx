import React from 'react';
import HeroBackground from '../assets/hero-background.png';

function Hero() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroBackground})` }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/60 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl">
            Empowering Busy Families with <span className="text-[#ffe67b]">Sustainable</span>, Nutritious Meals
          </h1>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="px-6 py-3 bg-transparent border border-[#ffe67b] text-[#ffe67b] rounded-lg text-lg md:text-xl hover:bg-[#ffe67b] hover:text-black grow vertical-center transition duration-300 font-bold">
              DISCOVER
            </a>
            <a href="#" className="px-6 py-3 bg-[#ffe67b] text-black rounded-lg text-lg md:text-xl hover:text-[#ffe67b] hover:bg-black hover:border-1 grow w-full vertical-center transition duration-600 font-bold">
              ORDER NOW
            </a>
          </div>
        </div>
      </section>
  )
}

export default Hero
