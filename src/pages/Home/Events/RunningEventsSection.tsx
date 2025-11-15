import React from 'react'
import { MapPin, CalendarDays, Clock } from 'lucide-react'

interface Event {
  title: string
  location: string
  date: string
  time: string
  price: string
  image: string
}

const events: Event[] = [
  {
    title: 'Women Marathon Event 2024',
    location: '710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY',
    date: 'OCT 20, 2024',
    time: 'START 06:00 AM - UNTIL FINISH',
    price: '$95',
    image:
      'https://www.shutterstock.com/image-photo/athlete-trail-running-desert-landscape-260nw-1323007985.jpg',
  },
  {
    title: 'Women Marathon Event 2023',
    location: '710 1ST ST. EASTON, PA 18042 | CHESTER COUNTY',
    date: 'OCT 20, 2023',
    time: 'START 06:00 AM - UNTIL FINISH',
    price: '$45',
    image:
      'https://www.shutterstock.com/image-photo/running-athletes-jogging-on-trail-260nw-1273599259.jpg',
  },
]

const boxes = Array.from({ length: 16 }, (_, i) => i)

const RunningEventsSection: React.FC = () => {
  return (
    <section className='w-full bg-[#1b1b1b] text-white py-16 px-3 sm:px-8 overflow-hidden'>
      <div className='flex justify-between items-center mb-10 flex-wrap'>
        <div>
          <h4 className='text-xs sm:text-sm uppercase tracking-[3px] text-[#c3e92d] font-semibold mb-2'>
            Running Events
          </h4>
          <h2 className='text-base sm:text-lg md:text-2xl font-bold uppercase'>
            Running Events Coming Up Include
          </h2>
        </div>
        <p className='uppercase text-xs sm:text-sm font-semibold cursor-pointer hover:underline mt-3 sm:mt-0'>
          » View All
        </p>
      </div>

      <div className='flex flex-col gap-6 items-center'>
        {events.map((event, index) => (
          <div
            key={index}
            className='relative w-full  max-w-6xl h-auto  overflow-hidden'
            style={{
              backgroundImage: `url(${event.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className='relative flex justify-between items-stretch h-full'>
              <div
                className='absolute bg-[#c3e92d] bottom-0 left-0 
                           h-[100px] sm:h-[90px] md:h-[100px] 
                           py-1 sm:py-3 md:py-6 lg:py-10
                           w-[115px] sm:w-[140px] md:w-[210px] lg:w-[310px]
                           z-10 transition-all duration-300'
                style={{
                  clipPath: 'polygon(0 0, 90% 0, 100% 14%, 86% 100%, 0 100%)',
                }}
              ></div>
              <div
                className='absolute bg-black text-white flex flex-col justify-start
             pt-3 sm:pt-6 md:pt-8
             px-1 sm:px-4 md:px-6 lg:px-10 
             w-[130px] sm:w-[170px] md:w-[240px] lg:w-[350px]
             left-0 h-full z-20 transition-all duration-300'
                style={{
                  clipPath: 'polygon(0 0, 90% 0, 100% 25%, 70% 100%, 0 100%)',
                }}
              >
                <h3 className='text-[6px] sm:text-[10px] md:text-[13px] lg:text-[16px] font-semibold mb-[2px] sm:mb-2 md:mb-3 uppercase leading-tight relative z-10'>
                  {event.title}
                </h3>

                <div
                  className='flex items-center text-gray-300 text-[4px] sm:text-[10px] md:text-[6px] 
  lg:text-[12px] mb-[2px] relative z-10'
                >
                  <MapPin className='text-[#c3e92d] mr-1 sm:mr-2' size={9} />
                  {event.location}
                </div>

                <div className='flex items-center text-gray-300 text-[4px] sm:text-[4px] md:text-[10px] lg:text-[13px] mb-[2px] relative z-10'>
                  <CalendarDays
                    className='text-[#c3e92d] mr-1 sm:mr-2'
                    size={9}
                  />
                  {event.date}
                </div>

                <div className='flex items-center text-gray-300 text-[4px] sm:text-[4px] md:text-[10px] lg:text-[13px] relative z-10'>
                  <Clock className='text-[#c3e92d] mr-1 sm:mr-2' size={9} />
                  {event.time}
                </div>
              </div>
              <div className='bg-black flex flex-row justify-between ml-auto h-full z-0'>
                <div
                  className='flex flex-col justify-center items-center
                                px-2 sm:px-4 md:px-6 lg:px-10
                                w-[100px] sm:w-[150px] md:w-[190px] lg:w-[250px]'
                >
                  <h4 className='text-[#c3e92d] uppercase text-[8px] sm:text-[10px] md:text-sm mb-[2px] sm:mb-2 tracking-wider'>
                    Ticket
                  </h4>
                  <p className='text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-[2px]'>
                    {event.price}
                  </p>
                  <span className='text-[6px] sm:text-[9px] md:text-xs text-gray-400 mb-[3px] sm:mb-4'>
                    / Ticket
                  </span>
                  <button
                    className='bg-[#c3e92d] text-black font-semibold uppercase tracking-wide 
                                     px-3 sm:px-5 md:px-6 py-[1px] sm:py-2 rounded 
                                     text-[6px] sm:text-[9px] md:text-[12px] 
                                     hover:bg-[#a8d627] transition-all'
                  >
                    Learn More
                  </button>
                </div>

                <div className='flex justify-center'>
                  {[0, 1].map((pillar) => (
                    <div key={pillar} className='flex flex-col'>
                      {boxes.map((_, i) => {
                        const isEven = i % 2 === 0
                        const color =
                          pillar === 0
                            ? isEven
                              ? 'bg-black'
                              : 'bg-[#c3e92d]'
                            : isEven
                              ? 'bg-[#c3e92d]'
                              : 'bg-black'
                        return (
                          <div
                            key={i}
                            className={`w-[10px] h-[16px] sm:w-2 sm:h-[16px] ${color}`}
                          ></div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RunningEventsSection
