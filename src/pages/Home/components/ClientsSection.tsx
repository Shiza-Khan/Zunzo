import React from 'react'
import { clients } from '../utils/clientsSection'

const ClientsSection: React.FC = () => {
  return (
    <section className='w-full py-16 bg-[#2f2f2f] text-white px-6 sm:px-16'>
      <div className='text-center mb-10'>
        <h4 className='text-sm uppercase tracking-widest text-[#c3e92d] font-semibold mb-3'>
          Our Client
        </h4>
        <h2 className='text-2xl sm:text-3xl uppercase font-bold mb-6'>
          Running is what we do
        </h2>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 text-center'>
        {clients
          .reduce((acc, row) => [...acc, ...row], [])
          .map((client, index) => {
            const Icon = client.icon

            return (
              <div
                key={index}
                className='flex flex-col items-center justify-center bg-[#2a2a2a] py-6 rounded-2xl hover:bg-[#353535] hover:scale-105 transition-all duration-300'
              >
                <div className='text-4xl mb-3'>
                  <Icon className={client.className} />
                </div>

                <p className='text-sm sm:text-base font-semibold'>
                  {client.name}
                </p>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default ClientsSection
