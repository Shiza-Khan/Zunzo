import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const ContactUsSection: React.FC = () => {
  return (
    <section className='w-full relative'>
      <div className="w-full min-h-screen md:h-[600px] bg-[url('https://twa.com.pk/wp-content/uploads/2025/01/IMG-20250127-WA0010.jpg')] bg-cover bg-center relative">
        <div className='absolute bottom-0 left-0 w-full h-25 md:h-35 bg-[#c3e92d]'></div>

        <div
          className='absolute inset-0 flex flex-col md:flex-row items-center justify-center 
         px-4 md:px-20'
        >
          <div className='w-full md:w-1/2 h-80 md:h-[400px] bg-white'>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019722096648!2d-122.42067968468194!3d37.77851917975868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5c4ed06f%3A0x51b155b2adf1c09!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1697433890482!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
            ></iframe>
          </div>

          <div className='w-full md:w-1/2  p-8 bg-black'>
            <h2 className='text-3xl text-white font-bold uppercase mb-6 text-center md:text-left'>
              Contact Us
            </h2>

            <div className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <label className='block text-sm text-slate-300 mb-1'>
                  Phone
                </label>
                <p className='text-white'>+92 123 456 789</p>
              </div>
              <div>
                <label className='block text-sm text-slate-300 mb-1'>
                  Email
                </label>
                <p className='text-white'>f0tH7@example.com</p>
              </div>
            </div>

            <div className='flex gap-4 mb-6'>
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
            </div>

            <div className='grid grid-cols-2 gap-4 mb-4'>
              <div>
                <input
                  type='text'
                  className='w-full  text-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
                  placeholder='Enter your name'
                />
              </div>
              <div>
                <input
                  type='email'
                  className='w-full  text-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
                  placeholder='Enter your email'
                />
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-6'>
              <div>
                <input
                  type='tel'
                  className='w-full text-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'
                  placeholder='Enter your number'
                />
              </div>
              <div>
                <select
                  className='w-full bg-black text-gray-200 border border-gray-300 rounded-md px-3 py-2 
  focus:outline-none focus:ring-2 focus:ring-green-400'
                  defaultValue=''
                >
                  <option value=''>Gender</option>
                  <option value='male' className='bg-black text-white'>
                    Male
                  </option>
                  <option value='female' className='bg-black text-white'>
                    Female
                  </option>
                  <option value='other' className='bg-black text-white'>
                    Other
                  </option>
                </select>
              </div>
            </div>

            <button className='bg-[#c3e92d] text-black  font-semibold uppercase tracking-wide px-6 py-2 rounded hover:bg-[#a8d627] transition-all'>
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
