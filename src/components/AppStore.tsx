import bgBeens from "/images/website/coffee-beans-bg.png"
import googleStore from "/images/website/play_store.png"
import appleStore from "/images/website/app_store.png"

const appStore_bg = {
    backgroundImage : `url(${bgBeens})`,
    backgroundColor : "#270c03",
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    hight : "100%",
    width : "100%",
}

function AppStore() {
  return (
    <>
        <div style={appStore_bg} className="py-14">
            <div className="container">
                <div data-aos = "fade-up" data-aos-delay = "300" className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    
                    <div  className="space-y-6 max-w-xl mx-auto">
                        {/* text content */}
                        <div>
                            <h1 className="font-semibold text-white/80 text-2xl text-center sm:text-left sm:text-4xl pl-3">Coffee Cafe is available for Android and IOS</h1>
                        </div>

                        {/* Logo section */}
                        <div className="flex flex-wrap justify-center sm:justify-start items-center">
                            <a href="#">
                                <img className="max-2-[150px] md:max-w-[200px] sm:max-w-[120px]" src={googleStore} alt="download from google play link" />
                            </a>
                            <a href="#">
                                <img className="max-2-[150px] md:max-w-[200px] sm:max-w-[120px]" src={appleStore} alt="download from apple store link" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppStore
