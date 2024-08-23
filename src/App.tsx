import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Home from './pages/Home'
import Store from './pages/Store'
import RootLayout from './Layout/RootLayout'
import { Routes, Route } from 'react-router-dom'


function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
    })
  })
  
  return (
    <RootLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Store' element={<Store/>}/>
        </Routes>
    </RootLayout>
  )
}

export default App
