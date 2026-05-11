import Footer from "./Footer";
import  Logo from "../assets/brand-logo.png"
import NavigationBar from "./NavigationBar"
import React, { useEffect } from "react"
import About from "./About"
import AboutCompany from "./AboutCompany"
import NohazzScientificSection from "./NohazzScientificPage"
import NewsEvents from "./News&Events"
import Products from "./Products"
import Contact from "./Contact"
import Location from "./Location"
import AboutDescription from "./AboutDescription"


function LandingPage() {
    const [isTrue , setIsTrue] = React.useState(false)

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsTrue(true);
            } else {
            setIsTrue(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return(
        <>
        <section className={`fixed lg:${isTrue ? 'fixed' : 'hidden'} top-0 left-0 w-full z-999 flex justify-center pt-4`}>
          <div className="w-[95%]">
             <NavigationBar />
           </div>
        </section>
         <section className="relative hidden w-full h-auto lg:flex flex-col bg-gray-200 py-3 lg:py-5">   
            <div className="hidden w-full h-[10%] lg:flex items-center justify-between px-10">
                <img src={Logo} alt="Logo" className="w-45 h-full object-contain" />
                <div className="flex flex-wrap gap-2 md:gap-5 items-center">
                    {[
                        { name: "Home", link:"/" },
                        { name: "About Us", link:"/about" },
                        { name: "Services", link:"/services" },
                        { name: "News & Events", link:"/news-events" },
                        { name: "Products", link:"/products" },
                    ].map((item) => (
                        <button
                        key={item.name}
                        onClick={() => window.open(item.link, "_blank")}
                        className="
                            relative text-gray-800 font-medium
                            px-3 py-2
                            transition-all duration-300
                            hover:text-blue-700
                            group
                        "
                        >
                        {item.name}

                        {/* underline effect */}
                        <span
                            className="
                            absolute left-1/2 -translate-x-1/2 bottom-0
                            w-0 h-0.5 bg-blue-600
                            group-hover:w-full
                            transition-all duration-300
                            rounded-full
                            "
                        ></span>
                        </button>
                    ))}

                </div>
    <div className="hidden md:flex items-center gap-3 lg:gap-4">
        <button className="
            px-5 py-2 rounded-full
            bg-green-600 text-white
            hover:bg-green-700 transition
          ">
            Customer Portal
          </button>

          <button className="
            px-5 py-2 rounded-full
            bg-blue-600 text-white
            hover:bg-blue-700 transition
          ">
            Admin Portal
          </button>

    </div>
</div>         
</section>
<section className="w-full py-25 lg:py-10 flex flex-col items-center justify-center">
    <div className="w-full flex justify-center px-4 md:px-10 lg:px-10 py-5">
        <div className="w-full aspect-video overflow-hidden rounded-xl shadow-xl">
            <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                src="https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778479442/DREAMLIFE.LK_NOHAZZ_WEB_LOOP_wll32w.mp4"
                type="video/mp4"
                />
            </video>
        </div>
    </div>
</section>
<section>
    <AboutDescription />
</section>
<section>
    <AboutCompany />
</section>
<section>
    <About />
</section>
<section>
    <NohazzScientificSection />
</section>
<section>
    <Products />
</section>
<section>
    <NewsEvents />
</section>
<section>
    <Contact />
</section>
<section>
    <Location />
</section>
         <Footer />
        </>
       
    )

}

export default LandingPage;