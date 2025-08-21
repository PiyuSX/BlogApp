import React from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='lg:px-64 md:px-32 sm:px-16 px-6'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout;
