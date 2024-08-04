

import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import React from 'react'

const AppLayout = ({children}) => {
  return (
    <div className='bg-white'>
        <Navbar/>
        {children}
        <Footer/>
      
    </div>
  )
}

export default AppLayout
