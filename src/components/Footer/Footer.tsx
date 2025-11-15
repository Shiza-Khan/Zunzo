import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaRunning,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLocationArrow,
} from 'react-icons/fa'
const FooterSection: React.FC = () => {
  return (
    <footer className='bg-black text-white pt-14 pb-4 px-6 md:px-20'>
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center
       sm:text-left items-center pb-5'
      >
        <div>
          <div className='flex justify-center sm:justify-start items-center gap-3 mb-4'>
            <FaRunning className='text-[#c3e92d] text-4xl' />
            <h2 className='text-2xl font-bold text-[#c3e92d] tracking-wider'>
              Zunzo
            </h2>
          </div>

          <p className='text-gray-300 text-sm leading-relaxed mb-5'>
            Welcome to our running community! Discover the joy of running,
            connect with fitness enthusiasts, and take your journey to the next
            stride. Let’s run towards a healthier tomorrow together!
          </p>

          <div className='flex justify-center sm:justify-start gap-1 flex-wrap'>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition'
            >
              <FaFacebookF />
            </a>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-white text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition'
            >
              <FaTwitter />
            </a>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-white text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition'
            >
              <FaInstagram />
            </a>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition'
            >
              <FaLinkedinIn />
            </a>
            <a
              href='#'
              className='w-10 h-10 flex items-center justify-center bg-white text-red-500 rounded-full hover:bg-red-500 hover:text-white transition'
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div
          className='flex flex-col justify-center items-center 
         text-center'
        >
          <div>
            <h3 className='text-xl font-semibold mb-5 text-white'>
              Quick Links
            </h3>
            <ul className='space-y-3 text-gray-300'>
              <li className='hover:text-[#c3e92d] hover:underline cursor-pointer'>
                About Us
              </li>
              <li className='hover:text-[#c3e92d] hover:underline cursor-pointer'>
                Our Events
              </li>
              <li className='hover:text-[#c3e92d] hover:underline cursor-pointer'>
                Latest News
              </li>
              <li className='hover:text-[#c3e92d] hover:underline cursor-pointer'>
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        <div
          className='flex flex-col justify-center items-center 
         text-center'
        >
          <div>
            <h3 className='text-xl font-semibold mb-5 text-white'>Pages</h3>
            <ul className='space-y-3 text-gray-300'>
              <li className='hover:text-[#c3e92d] hover:underline cursor-pointer'>
                Home
              </li>
              <li className='hover:text-[#c3e92d] hover:underline cursor-pointer'>
                Shop
              </li>
              <li className='hover:text-[#c3e92d] hover:underline cursor-pointer'>
                My Account
              </li>
              <li className='hover:text-[#c3e92d] hover:underline cursor-pointer'>
                Wishlist
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-5 text-white'>Newsletter</h3>

          <div className='flex justify-center sm:justify-start items-center gap-3 mb-3'>
            <FaPhoneAlt className='text-[#c3e92d] text-lg' />
            <div>
              <p className='text-sm text-gray-400'>Need Help? 24/7</p>
              <p className='text-lg font-semibold'>+92 345 6789</p>
            </div>
          </div>

          <div className='flex justify-center sm:justify-start items-start gap-3 mb-4'>
            <FaMapMarkerAlt className='text-[#c3e92d] text-lg mt-1' />
            <p className='text-gray-300 text-sm'>
              1st Street, Easton, PA 18040 | <br /> Chester Country
            </p>
          </div>

          <form className='flex w-full items-center bg-gray-800 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#c3e92d] transition'>
            <input
              type='email'
              placeholder='Your Email Address'
              className='flex-grow p-3 bg-gray-800 text-gray-200 outline-none text-sm'
            />
            <button
              type='submit'
              className='bg-[#c3e92d] text-black p-3 hover:bg-[#b0d42d] transition-all flex items-center justify-center relative'
            >
              <span className='absolute left-0 top-1/2 w-[1px] h-5 bg-black transform -translate-y-1/2'></span>
              <FaLocationArrow className='text-lg ml-2' />
            </button>
          </form>
        </div>
      </div>

      <div
        className='border-t border-gray-700 mt-5 pt-2 pb-2 text-gray-400 text-sm flex flex-col
       md:flex-row items-center justify-between gap-3'
      >
        <div className='text-center md:text-left'>
          © {new Date().getFullYear()} Zunzo Running Club. All rights reserved.
        </div>

        <div className='flex items-center gap-2 text-center md:text-right'>
          <a href='#' className='hover:text-[#c3e92d] transition'>
            About
          </a>
          <span className='text-gray-500'>|</span>
          <a href='#' className='hover:text-[#c3e92d] transition'>
            My Account
          </a>
          <span className='text-gray-500'>|</span>
          <a href='#' className='hover:text-[#c3e92d] transition'>
            Shop
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
