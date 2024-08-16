import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from './components/Navbar'
import Home from './components/Home'


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
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
