import React from 'react'
import NavbarTop from '../components/Header/NavbarTop'
import NavbarBottom from '../components/Header/MainNavbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavbarTop />
      <NavbarBottom />
      <main className='flex-1 bg-gray-50'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
