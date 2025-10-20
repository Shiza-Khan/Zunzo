import React from 'react'

const CoursesSection: React.FC = () => {
  const cards = [
    {
      image:
        'https://articles-1mg.gumlet.io/articles/wp-content/uploads/2017/05/rsz_shutterstock_547520209.jpg?compress=true&quality=80&w=640&dpr=2.6',
      title: 'Embracing the Journey',
      desc: 'Unveiling the life-changing benefits of running — discover how consistency and motivation transform your lifestyle.',
    },
    {
      image:
        'https://entail.insidetracker.com/en-assets/insidetracker/fit-in/700x700/shutterstock_1475959124-1705929131134.jpg',
      title: 'Perfect Your Technique',
      desc: 'Learn proper form, breathing, and stride techniques to enhance performance and reduce injury risk.',
    },
    {
      image:
        'https://hips.hearstapps.com/hmg-prod/images/young-women-runners-rounding-turn-on-track-royalty-free-image-656982959-1536591323.jpg?resize=640:*',
      title: 'The Runner’s Mindset',
      desc: 'Running is more than a sport — it’s mental discipline. Explore the power of focus, consistency, and goal setting.',
    },
  ]

  return (
    <section className='py-20 bg-black text-center'>
      <div className='mb-10'>
        <h4 className='text-[#c3e92d] text-sm uppercase font-semibold tracking-widest'>
          Course / Tutorial
        </h4>
        <h2 className='text-xl md:text-2xl uppercase font-bold text-white'>
          Running Courses, Articles & Videos
        </h2>
        <h2 className='text-xl md:text-2xl uppercase text-white font-bold'>
          Tutorials About Running
        </h2>
      </div>
      // Cards
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='bg-black shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col'
          >
            <img
              src={card.image}
              alt={card.title}
              className='w-full h-56 mb-2 object-cover'
            />
            // Card Content
            <div className='p-0 text-left flex flex-col flex-grow'>
              <h3 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                {card.title}
              </h3>
              <p className='text-gray-400 text-sm sm:text-base mb-4 flex-grow'>
                {card.desc}
              </p>

              <div className='mt-auto'>
                <button className='bg-[#c3e92d] text-black font-semibold uppercase tracking-wide px-4 sm:px-6 py-2 rounded text-xs sm:text-sm hover:bg-[#a8d627] transition-all w-fit'>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoursesSection
