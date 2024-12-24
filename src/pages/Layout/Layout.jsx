import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

function Layout() {
  return (
    <div>
      <Header/>
        <main className='min-h-[61vh]'>
          <Outlet/> 
        </main>
      <Footer/>
    </div>
  )
}

export default Layout