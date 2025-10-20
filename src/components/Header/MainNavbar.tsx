import React, { useState, useEffect, useRef } from 'react'
import { Search, User, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'

const MainNavbar: React.FC = () => {
  const menuItems = [
    { name: 'Home', options: ['Dashboard', 'Features'] },
    { name: 'Pages', options: ['About Us', 'Services', 'FAQ'] },
    { name: 'Our Events', options: ['Upcoming', 'Past'] },
    { name: 'Shop', options: ['Products', 'Categories', 'Brands'] },
    { name: 'News', options: ['Blog', 'Press'] },
    { name: 'Contact', options: [] },
  ]

  const [selected, setSelected] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const handleSelect = (item: string) => {
    if (selected === item) {
      setSelected(null)
      setOpenDropdown(null)
    } else {
      setSelected(item)
      setOpenDropdown(item)
    }
  }

  const toggleMobileDropdown = (item: string) => {
    setMobileDropdown((prev) => (prev === item ? null : item))
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setSelected(null)
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='bg-black text-white py-3 relative z-50' ref={navRef}>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <FontAwesomeIcon icon={faPersonRunning} size='2xl' />
          <h1 className='text-2xl font-bold tracking-wider'>Zunzo</h1>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden lg:block'>
          <ul className='flex items-center space-x-6 text-sm font-medium uppercase'>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className='relative cursor-pointer group'
                onClick={() =>
                  item.name !== 'Contact' && handleSelect(item.name)
                }
              >
                <div
                  className={`transition-colors flex items-center space-x-1 ${
                    selected === item.name
                      ? 'text-[#c3e92d]'
                      : 'text-white hover:text-[#c3e92d]'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.name !== 'Contact' && <ChevronDown size={14} />}
                </div>

                {/* Bottom line */}
                {item.name !== 'Contact' && (
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[#c3e92d]
                     rounded transition-transform duration-200 ${
                       selected === item.name
                         ? 'scale-x-100'
                         : 'scale-x-0 group-hover:scale-x-100 origin-left'
                     }`}
                  ></span>
                )}

                {/* Dropdown */}
                {selected === item.name &&
                  item.options.length > 0 &&
                  openDropdown === item.name && (
                    <ul className='absolute top-full mt-1 left-0 bg-black text-white shadow-lg rounded-md py-1 min-w-[140px] z-50'>
                      {item.options.map((opt) => (
                        <li
                          key={opt}
                          className='px-3 py-1 hover:bg-[#1a1a1a] hover:text-[#c3e92d] cursor-pointer whitespace-nowrap'
                        >
                          {opt}
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Buttons */}
        <div className='hidden lg:flex items-center space-x-6'>
          <button className='hover:text-[#c3e92d] transition-colors'>
            <Search size={18} />
          </button>

          <button className='flex items-center space-x-2 hover:text-[#c3e92d] transition-colors text-sm'>
            <User size={18} />
            <span>Login / Register</span>
          </button>

          <button className='relative group transition-colors'>
            <ShoppingCart
              size={20}
              className='transition-colors group-hover:text-[#c3e92d]'
            />
            <span className='absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full px-1 transition-colors group-hover:bg-[#c3e92d] group-hover:text-black'>
              0
            </span>
          </button>

          <button className='text-black bg-[#c3e92d] text-sm font-semibold px-3 py-1.5 rounded-2xl hover:bg-[#aad306] transition-transform transform hover:scale-105 shadow-md'>
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-white'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Background Overlay when menu open */}
      {mobileMenuOpen && <div onClick={() => setMobileMenuOpen(false)}></div>}

      {/* Mobile Menu (slide from right) */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-[#111] z-50 shadow-2xl 
        transform transition-transform duration-500 ease-in-out 
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex justify-between items-center p-4 border-b border-gray-800'>
          <h2 className='text-lg font-semibold'>Menu</h2>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className='flex flex-col space-y-3 text-sm font-medium uppercase p-5'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <div
                className='flex items-center justify-between cursor-pointer
                 hover:text-[#c3e92d] transition'
                onClick={() =>
                  item.options.length > 0
                    ? toggleMobileDropdown(item.name)
                    : null
                }
              >
                <span>{item.name}</span>
                {item.options.length > 0 && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      mobileDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </div>

              {/* Mobile Dropdown Options */}
              {mobileDropdown === item.name && item.options.length > 0 && (
                <ul className='pl-4 mt-2 space-y-2 text-gray-300'>
                  {item.options.map((opt) => (
                    <li
                      key={opt}
                      className='hover:text-[#c3e92d] transition-colors cursor-pointer'
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className='flex flex-col space-y-2 px-5'>
          <button className='flex items-center gap-2 hover:text-[#c3e92d]'>
            Login / Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainNavbar
