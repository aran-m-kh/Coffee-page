import { useEffect } from "react"
import Aos from "aos"

import Hero from "../components/Hero"
import Services from "../components/Services"
import Banner from "../components/Banner"
import AppStore from "../components/AppStore"
function Home() {


  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
    })
  })


  return (
  <>
    <Hero/>
    <Services/>
    <Banner/>
    <AppStore/>
  </>
  )
}

export default Home
