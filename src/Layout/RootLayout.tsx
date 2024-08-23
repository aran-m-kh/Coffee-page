import React from 'react'
import Navbar from './Navbar/Navbar'

function RootLayout({children} : React.ReactNode) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  )
}

export default RootLayout
