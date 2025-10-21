import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section
      className='relative w-full min-h-[600px] flex items-center bg-no-repeat bg-center bg-cover'
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/soccer-player-kicks-ball-wet-field-close-up-athlete-foot-orange-socks-cleats-football-match-rainy-weather-dynamic-386923077.jpg')",
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      <div className='relative z-10 max-w-2xl px-10 sm:px-16'>
        <h3 className='text-sm font-semibold uppercase mb-2 text-white'>
          Sale up to 50% Off
        </h3>
        <h1 className='text-xl  md:text-3xl lg:text-4xl font-bold mb-4 text-white uppercase'>
          Embrace the Adventure of Running With Us
        </h1>
        <p className='text-sm   md:text-1xl lg:text-2xl mb-6 text-white'>
          Discover the best running gear and elevate your performance. Join our
          community of passionate runners today!
        </p>
        <button
          className='bg-[#c3e92d] hover:bg-[#657e04] text-black font-semibold px-6 py-3
         rounded-md transition duration-300'
        >
          Join Club
        </button>
      </div>
    </section>
  )
}

export default HeroSection
