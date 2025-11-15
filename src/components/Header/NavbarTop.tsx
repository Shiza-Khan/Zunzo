import React from 'react'
import {
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const NavbarTop: React.FC = () => {
  return (
    <div className='bg-[#c3e92d] text-black text-sm py-2 hidden md:block'>
      <div className='container mx-auto px-10 lg:px-16 flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
          <div className='flex items-center space-x-1'>
            <Mail size={16} />
            <span>example@gmail.com</span>
          </div>
          <div className='flex items-center space-x-1'>
            <MapPin size={16} />
            <span>1st Street, Easton, PA 18040 | Chester Country</span>
          </div>
        </div>

        <div className='flex items-center space-x-3'>
          <a href='#' className='hover:text-pink-500 transition-colors'>
            <Instagram size={16} />
          </a>
          <a href='#' className='hover:text-blue-700 transition-colors'>
            <Facebook size={16} />
          </a>
          <a href='#' className='hover:text-blue-500 transition-colors'>
            <Twitter size={16} />
          </a>
          <a href='#' className='hover:text-red-600 transition-colors'>
            <Youtube size={16} />
          </a>
          <a href='#' className='hover:text-blue-700 transition-colors'>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
