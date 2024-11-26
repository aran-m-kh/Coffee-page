import { GrSecure } from "react-icons/gr"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

import whiteCup from "/images/coffee-white.png"
import bgTexture from "/images/website/coffee-texture.jpg"

const banner_bg = {
    backgroundImage : `url(${bgTexture})`,
    backgroundColor : "#270c03",
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    hight : "100%",
    width : "100%",
}
function Banner() {
  return (
    <>
        <div style={banner_bg}>
            <div className="container min-h-[550px] flex items-center justify-center sm:py-0">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

                    {/* image section */}
                    <div className="flex justify-center items-center">
                        <img
                        data-aos = "zoom-in"
                        data-aos-delay = "300"
                        className="max-w-[430px] w-full mx-auto spin" src={whiteCup} alt="White_Cup_image" />    
                    </div>

                    {/*description section*/}
                    <div className="flex justify-start items-center pb-4">
                        <div>
                            <h1 data-aos = "fade-up" data-aos-delay = "300" className="font-cursive font-bold text-3xl sm:text-4xl text-black p-2">Premium Blen Coffee</h1>
                            <p data-aos = "fade-up" data-aos-delay = "300" className="text-black/60 text-sm tracking-wide leading-5 p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                            <div className="grid grid-cols-2 gap-6">
                                
                                {/* icons section */}
                                <div className="flex flex-col gap-4 mt-4 border-r-4 border-r-primary/55">
                                    <div data-aos = "fade-up" data-aos-delay = "400" className="flex items-center gap-2">
                                        <GrSecure className="text-2xl p-3 h-12 w-12 shadow-sm rounded-full bg-red-100"/>
                                        <span>Premium Coffee</span>
                                    </div>
                                    <div data-aos = "fade-up" data-aos-delay = "500" className="flex items-center gap-2">
                                        <IoFastFood className="text-2xl p-3 h-12 w-12 shadow-sm rounded-full bg-orange-100"/>
                                        <span>Hot Coffee</span>
                                    </div>
                                    <div data-aos = "fade-up" data-aos-delay = "550" className="flex items-center gap-2">
                                        <GiFoodTruck className="text-2xl p-3 h-12 w-12 shadow-sm rounded-full bg-yellow-100"/>
                                        <span>Cold Coffee</span>
                                    </div>   
                                </div>
                                
                                {/* text section */}
                                <div data-aos = "fade-left" data-aos-delay = "400" className="mt-4 space-y-3">
                                    <h1 className="text-2xl font-cursive">Tea Lover</h1>
                                    <p className="text-sm text-gray-500">Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Banner
