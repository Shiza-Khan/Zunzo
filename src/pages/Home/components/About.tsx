import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { images } from '../utils/about'

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [scrollLeftPos, setScrollLeftPos] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const scrollAmount = 400

  const handleScroll = () => {
    if (!scrollRef.current) return
    setScrollLeftPos(scrollRef.current.scrollLeft)
    setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
  }

  useEffect(() => {
    handleScroll()
  }, [])

  const scrollLeftClick = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }

  const scrollRightClick = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className='w-full py-20 bg-[#2f2f2f] text-white px-6 sm:px-16'>
      <div className='max-w-3xl mb-5'>
        <h4 className='text-sm uppercase tracking-widest text-[#c3e92d] font-semibold mb-3'>
          About Us
        </h4>
        <h2 className='text-xl  sm:text-1xl  md:text:2xl lg:text-3xl font-bold mb-5'>
          Welcome to Run Club
        </h2>
        <p className='text-gray-300 leading-relaxed text-sm md:text-xl lg:text-1xl'>
          At Run Club, we celebrate every stride. Whether you’re a beginner or a
          seasoned runner, our community brings you together to share passion,
          motivation, and performance. Let’s run, grow, and inspire — together.
        </p>
      </div>

      <div className='relative group max-w-[90rem] mx-auto'>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className='flex overflow-x-auto scroll-smooth gap-4 scroll-container'
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className='flex-shrink-0 w-[300px] sm:w-[250px] md:w-[300px] lg:w-[350px]'
              style={{ scrollSnapAlign: 'start' }}
            >
              <div
                className='cursor-pointer bg-gray-900 h-[250px] sm:h-[280px] md:h-[320px]
               overflow-hidden shadow-lg  '
              >
                <img
                  src={src}
                  alt={`Running ${i + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          ))}
        </div>

        {scrollLeftPos > 0 && (
          <button
            onClick={scrollLeftClick}
            className='absolute left-0 top-1/2 -translate-y-1/2 h-[20%] px-3 bg-[#c3e92d] 
            rounded-4xl hover:shadow-lg shadow-black/50 transition-opacity
             duration-200 opacity-0 group-hover:opacity-100 z-10 flex items-center justify-center'
          >
            <ChevronLeft size={30} className='text-black' />
          </button>
        )}

        {scrollLeftPos < maxScroll && (
          <button
            onClick={scrollRightClick}
            className='absolute right-0 top-1/2 -translate-y-1/2 h-[20%] px-3 bg-[#c3e92d] rounded-4xl hover:shadow-lg shadow-black/50 transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-10 flex items-center justify-center'
          >
            <ChevronRight size={30} className='text-black' />
          </button>
        )}
      </div>
    </section>
  )
}

export default About
