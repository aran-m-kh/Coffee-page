import Slider from "react-slick";
import { testimonialsData } from "../Data/data";
function Testimonials() {

  const settings = {
    dots: true,
    arrows : false,
    Infinite : true,
    speed : 500,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 2000,
    cssEase: "linear",
    pauseOnHover : true,
    pauseOnFocus : true,
    responsive : [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      <div className='container'>
        
        {/* Header Title */}
        <div
          data-aos = "fade-up" data-aos-delay = "300"
          className="text-center mb-5 mt-5 py-4">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">Testimonials</h1>
        </div>

        {/*Cart section */}
        <Slider {...settings}>
          {testimonialsData.map((item) => {
            return(
              <div data-aos = "zoom-in" data-aos-delay = "400" className="my-6" key={item.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative h-[250px]">
                
                  {/* profile pic */}
                  <div className="mb-4">
                    <img className="rounded-full h-20 w-20" src={item.img} alt="profile pic" />
                  </div>
                  
                  {/* content section */}
                  <div className="flex flex-col gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{item.text}</p>
                      <h1 className="text-xl font-bold font-cursive text-black/60">{item.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              
              </div>
            )
          })}
        </Slider>


      </div>
    </div>
  )
}

export default Testimonials
