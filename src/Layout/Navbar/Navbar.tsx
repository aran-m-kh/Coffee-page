import { Link } from "react-router-dom"
import Logo from "../../assets/website/coffee_logo.png"
import { NavbarData } from '../../Data/data'
import { GiCoffeeCup } from 'react-icons/gi'
function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-secondary to-secondary/90'>
      <div className='container'>
        <div className='flex py-2 justify-between items-center'>
            
            {/* logo section */}
                
                <div>
                    <a className='flex justify-center items-center gap-2 text-white text-3xl font-cursive'  href="#">
                        <img className='w-16' src={Logo} alt="logo" />
                        Coffee Cafe
                    </a>
                </div>
            
            {/* Links section */}
                
                <div className='flex gap-7 items-center justify-center'>
                  
                  <ul className='text-xl sm:flex gap-8 hidden'>
                    {NavbarData.map((item) => {
                      return <li className='text-white/70 hover:text-white duration-200' key={item.id}>
                        
                        <Link to={item.link}>{item.title}</Link>
                      </li>
                    })}
                  </ul>
                  <Link to={"/Store"} className='text-white rounded-full px-4 py-2 flex items-center gap-2 bg-primary hover:scale-105 hover:bg-secondary duration-200'>
                    <>Order</>
                    <GiCoffeeCup/>
                    </Link>
                </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
