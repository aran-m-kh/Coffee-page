import { Link } from "react-router-dom"
import { servicesData } from "../Data/data"
function Services() {
  return (
    <>
      <div className="py-10">
        <div className="container text-black">

          {/* Title section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">Best Coffee For You</h1>
          </div>

          {/* Services section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-5 lg:gap-5 place-items-center">

              {servicesData.map((item) => {
                return (
                  <div
                    data-aos = "fade-up"
                    data-aos-delay = {item.aos_delay}
                    key={item.id}
                    className="flex flex-col items-center max-w-[300px] rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 group relative">
                    
                    {/* image section */}
                    <div className="max-h-[122px]">
                      <img className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300" src={item.img.cup} alt="coffee_pic" />
                    </div>

                    {/* text section */}
                    <div className="text-center p-4">
                      <h1 className="text-xl font-bold">{item.title}</h1>
                      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                  )  
              })}
            
            </div>
            <Link to="/store" 
              data-aos = "fade-in"
              data-aos-delay = "400"
              
              className="w-full flex items-center justify-center">
              <button className='bg-gradient-to-r from-primary to-secondary text-white px-20 shadow-xl py-2 mt-8 rounded-full border border-primary hover:scale-105 duration-200'>View All</button>
            </Link>
        </div>
      </div>
    </>
    
  )
}

export default Services
