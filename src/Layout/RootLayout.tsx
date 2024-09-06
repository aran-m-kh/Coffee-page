import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function RootLayout({children} : React.ReactNode) {
  return (
    <>
      <Navbar/>
      <main className='overflow-x-hidden overflow-y-hidden'>{children}</main>
      <Footer/>
    </>
  )
}

export default RootLayout
