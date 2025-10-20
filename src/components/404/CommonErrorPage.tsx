import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface ICommonErrorPage {
  titleError: string
  titleMessage: string
  contentMessage: string
}

const CommonErrorPage: FC<ICommonErrorPage> = (props: ICommonErrorPage) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/')
  }

  return (
    <div className='col-span-7  mb-10'>
      <div className=' h-[90vh] rounded-lg w-full flex justify-center items-center text-black flex-col '>
        <div className='gradient_text font-dm_sans font-extrabold min-w-max tracking-widest md:text-9xl text-4xl'>
          {props.titleError}
        </div>
        <h2 className='text-[#cfc5bb] font-dm_sans font-extrabold min-w-max tracking-widest md:text-4xl text-2xl uppercase'>
          {props.titleMessage}
        </h2>
        <p> {props.contentMessage} </p>
        <div
          className='rounded-lg mt-5 bg-gradient-to-r border border-[#ffffff59] from-[var(--banner-button-firstColor)] to-[var(--banner-button-secondColor)] text-white font-bebas text-base px-10 py-2 cursor-pointer uppercase tracking-widest'
          onClick={goBack}
        >
          Go To Home
        </div>
      </div>
    </div>
  )
}

export default CommonErrorPage
