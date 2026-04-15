import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { FaPersonRunning } from 'react-icons/fa6'

const TestimonialSection: React.FC = () => {
  const [activeStars, setActiveStars] = useState<number>(0)

  const handleNext = () => setActiveStars((prev) => (prev < 5 ? prev + 1 : 5))
  const handlePrev = () => setActiveStars((prev) => (prev > 0 ? prev - 1 : 0))

  return (
    <div className='bg-black text-white py-16 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 relative'>
      <div className='relative w-full lg:w-auto flex justify-center lg:justify-start'>
        <img
          src='https://images.pexels.com/photos/26763544/pexels-photo-26763544/free-photo-of-smiling-kid-on-a-path-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='Runner'
          className='w-full sm:w-[260px] md:w-[300px] h-[340px] sm:h-[380px] md:h-[420px] object-cover border-black rounded-lg shadow-lg'
        />
      </div>

      <div className='flex-1 flex flex-col justify-center w-full lg:w-auto relative'>
        <div className='flex items-center justify-center lg:justify-start space-x-1 mb-4'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                i < activeStars
                  ? 'text-yellow-400 fill-amber-300'
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>

        <h6 className='text-base sm:text-lg md:text-2xl font-bold leading-snug text-center lg:text-left'>
          "I've Always Struggled With <br className='hidden sm:block' />
          Staying Consistent With Exercise, <br className='hidden sm:block' />
          But Being Part Of The Running <br className='hidden sm:block' />
          Club Has Changed That"
        </h6>

        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-start mt-2 border-l-4 border-[#c3e92d] pl-3'>
          <div className='mt-2'>
            <h4 className='font-semibold text-lg'>Jane Nguyen</h4>
            <p className='text-sm text-gray-400'>Running Club Member</p>
          </div>
        </div>

        <div className='flex justify-center lg:justify-start space-x-4 mt-6'>
          <button
            onClick={handlePrev}
            className='w-10 h-10 flex items-center justify-center border bg-white border-gray-600 rounded-full hover:bg-[#c3e92d]'
          >
            <ChevronLeft size={30} className='text-black' />
          </button>
          <button
            onClick={handleNext}
            className='w-10 h-10 flex items-center justify-center border bg-white border-gray-600 rounded-full hover:bg-[#c3e92d]'
          >
            <ChevronRight size={30} className='text-black' />
          </button>
        </div>

        <div
          className='mt-8 bg-white text-black shadow-lg rounded-md 
          w-full sm:w-[260px] md:w-[280px] lg:w-[300px]
          mx-auto lg:mx-0 
          transition-all duration-300
          lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2'
        >
          <div className='flex items-center justify-center gap-2 py-3 font-bold text-xl sm:text-2xl'>
            <FaPersonRunning className='text-black' size={35} />
            20Km
          </div>

          <div className='grid grid-cols-20 grid-rows-2 h-[18px] sm:h-[22px] md:h-[24px]'>
            {[...Array(40)].map((_, i) => {
              const row = Math.floor(i / 20)
              const col = i % 20
              const isGreen =
                (row === 0 && col % 2 === 0) || (row === 1 && col % 2 !== 0)
              return (
                <div
                  key={i}
                  className={`${isGreen ? 'bg-gray-500' : 'bg-[#c3e92d]'} w-full h-full`}
                ></div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
