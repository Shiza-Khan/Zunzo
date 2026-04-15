import React from 'react'
import { benefits } from '../utils/runningBenefitsSection'

const RunningBenefitsSection: React.FC = () => {
  return (
    <section className='w-full py-20 bg-black text-white px-6 sm:px-16'>
      <div className='text-center mb-14'>
        <h4 className='text-sm uppercase tracking-[4px] text-[#c3e92d] font-semibold mb-3'>
          RUNNING BENEFITS
        </h4>
        <h2 className='text-sm sm:text-1xl md:text-2xl lg:text-3xl font-bold mb-6 uppercase'>
          Benefit of Running
        </h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className='relative border border-gray-600 border-t-4 border-t-[#c2e72f]
            bg-black p-8  text-center hover:scale-100 
            hover:bg-[#2b2b2b] transition-all duration-300'
          >
            <div className='flex items-center justify-center mb-4'>
              <span className='text-5xl font-bold text-[#c2e72f]'>
                {benefit.number}
              </span>
            </div>

            <div className='flex items-center justify-center mb-4'>
              <span className='w-20  border-t-2 border-dotted border-[#c2e72f]'></span>
            </div>

            <h3 className='text-sm sm:text:xl md:text-1xl lg:text-2xl font-semibold mb-3'>
              {benefit.title}
            </h3>

            <p className='text-gray-400 text-sm  leading-relaxed'>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RunningBenefitsSection
