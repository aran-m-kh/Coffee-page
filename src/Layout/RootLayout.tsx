import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

interface Props {
  children : React.ReactNode
}

function RootLayout({children} : Props) {
  return (
    <>
      <Navbar/>
      <main className='overflow-x-hidden overflow-y-hidden'>{children}</main>
      <Footer/>
    </>
  )
}

export default RootLayout
