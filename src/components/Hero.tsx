import Cup from "../assets/coffee2.png"
function Hero() {
  return (
    <div className='sm:h-[600px] min-h-[550px] h-screen bg-brandDark flex items-center justify-between'>
      <div className='container sm:pb-0 pb-8'>
        {/* Text section */}
        <div className='grid sm:grid-cols-2 grid-cols-1 justify-center items-center '>
            <div className='order-2 sm:order-1'>
                <h1 data-aos="zoom-in" data-aos-delay="300" className='lg:text-7xl sm:text-6xl text-5xl text-white font-bold'>We serve the richest <span className='text-primary font-cursive'>coffee</span> in the City</h1>
                <button data-aos="fade-up" data-aos-delay="450" className='bg-gradient-to-r from-primary to-secondary text-white px-3 py-2 mt-8 rounded-full border border-primary hover:scale-105 duration-200'>Coffee and Code</button>
            </div>
        {/* img section */}
            <div data-aos="zoom-in" data-aos-delay="300" className='flex min-h-[450px] items-center justify-center mx-auto order-1 sm:order-2 relative'>
                <img className='spin w-[300px] sm:w-[450px]' src={Cup} alt="Coffe_cup" />
                <button className='absolute top-10 -left-5 sm:-left-25  bg-gradient-to-r from-primary to-secondary text-white p-3 mt-4 rounded-xl  border-primary hover:scale-105 duration-200'>Hey coder</button>
                <button className='absolute bottom-10 -right-5 sm:-right-25   bg-gradient-to-r from-primary to-secondary text-white p-3 mt-4 rounded-xl  border-primary hover:scale-105 duration-200'>Best Coffee</button>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Hero
