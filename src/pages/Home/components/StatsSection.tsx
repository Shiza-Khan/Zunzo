import React, { useState, useRef, ReactNode } from 'react'
import { Users, Calendar } from 'lucide-react'
import { GiRunningShoe } from 'react-icons/gi'
import { FaAward } from 'react-icons/fa'
import { stats } from '../utils/statsSection'

const StatsSection: React.FC = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>(
    stats.map(() => 0),
  )

  const hasAnimated = useRef(false)

  const startAnimation = () => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const duration = 6000
    const startTime = performance.now()

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)

      setAnimatedNumbers(
        stats.map((stat) => Math.floor(stat.number * easedProgress)),
      )

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  return (
    <section
      className='bg-black text-white py-16'
      onMouseEnter={startAnimation}
    >
      <div
        className='container mx-auto px-10 sm:px-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4
       gap-10 text-center'
      >
        {stats.map((stat, index) => (
          <div key={index} className='flex flex-col items-center space-y-2'>
            <div className='text-[#c3e92d] mb-2'>
              <stat.icon size={50} />
            </div>{' '}
            <h2 className='text-3xl font-bold'>
              {animatedNumbers[index].toLocaleString()}
              {stat.label === 'Miles Run' ? 'KM' : ''}
            </h2>
            <p className='text-sm uppercase'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
