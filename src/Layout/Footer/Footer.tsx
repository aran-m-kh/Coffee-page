import { Link } from "react-router-dom"
import bgFooter from "../../assets/website/coffee-footer.jpg"
import { footerLinks } from "../../Data/data"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer_bg = {
  backgroundImage : `url(${bgFooter})`,
  backgroundPosition : "center",
  backgroundRepeat : "no-repeat",
  backgroundSize : "cover",
  minHight : "800px",
  width : "100%",
}
function Footer() {
  return (
    <div style={Footer_bg}>
      <div className="bg-black/40 min-h-[400px] text-white">
        <div className="container grid md:grid-cols-4 gap-6 pb-20 pt-14 mt-10">

          {/* company info */}
          <div>
            <Link to={"/"} className="text-2xl sm:text-3xl font-semibold font-cursive pt-4 tracking-widest">Coffee Cafe</Link>
            <p className="text-base pt-3">
              {" "}
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
            </p>
            <a
              className='bg-secondary text-white px-3 py-2 mt-10 -ml-2 min-w-52 inline-block rounded-full border border-primary hover:scale-105 duration-200'
              href="https://www.youtube.com" target="_blank">visit our youtube channel</a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-row-2 sm:col-span-2">
          
          {/* footer links */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Footer Links</h2>
            <ul>
              {footerLinks.map((item) => {
                return (
                  <li className="max-w-fit py-2 hover:scale-105 hover:text-yellow-300 duration-300" key={item.id}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Quick Links</h2>
            <ul>
              {footerLinks.map((item) => {
                return (
                  <li className="py-2 max-w-fit hover:scale-105 hover:text-yellow-300 duration-300" key={item.id}>
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                )
              })}
            </ul>
          </div>  
          </div>         
          
          {/* Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold py-2">Info</h2>
            <p>123 Street Name, City, Country</p>
            <p className="py-2">Phone: 123-456-7890</p>
            <p className="pb-4">Email: 9yHfz@example.com</p>
            <div className="flex gap-3 flex-row">
              <a className="text-4xl rounded-full hover:scale-110 duration-200" href="https://www.facebook.com" target="_blank">
                <FaFacebook/>
              </a>

              <a className="text-4xl rounded-full hover:scale-110 duration-200" href="https://www.instagram.com" target="_blank">
                <FaInstagram/>
              </a>

              <a className="text-4xl rounded-full hover:scale-110 duration-200" href="https://www.linkedin.com" target="_blank">
                <FaLinkedin/>
              </a>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Footer
