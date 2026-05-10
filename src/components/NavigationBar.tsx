import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("home")

  const scrollToSection = (id: string) => {
    setIsOpen(false) // close mobile menu
     setActive(id)
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: `#${id}`,
        offsetY: 90, // navbar height adjustment
      },
      ease: "power3.inOut",
    })
  }

  useEffect(() => {
    const sections = ["hero-section", "explore", "about", "footer"]

  const handleScroll = () => {
    let current = "hero-section"

        sections.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()

        
        if (rect.top <= 200 && rect.bottom >= 200) {
            current = id
        }

        
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
        ) {
            current = "footer"
        }
        })

        setActive(current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
}, [])

  return (
    <nav className="w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.08)] px-5 md:px-8 py-4">
      
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("hero-section")}
          className="flex flex-col leading-none cursor-pointer"
        >
          <h1 className="text-white font-black text-lg tracking-[3px]">
            NOHAZZ
          </h1>
          <p className="text-[9px] text-green-300 tracking-[4px] uppercase">
            Textile Science
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">

          <div className="flex items-center gap-8 text-sm font-medium text-gray-300">

            <button onClick={() => scrollToSection("hero-section")} className={`hover:text-green-300 ${active === "hero-section" ? "text-green-300" : ""}`} >
              Home
            </button>

            <button onClick={() => scrollToSection("explore")} className={`hover:text-green-300 ${active === "explore" ? "text-green-300" : ""}`} >
              Explore
            </button>

            <button onClick={() => scrollToSection("about")} className={`hover:text-green-300 ${active === "about" ? "text-green-300" : ""}`} >
              About
            </button>

            <button onClick={() => scrollToSection("footer")} className={`hover:text-green-300 ${active === "footer" ? "text-green-300" : ""}`} >
              Contact
            </button>

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            <button className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white hover:border-green-400/40">
              Customer Portal
            </button>

            <button className="px-5 py-2 rounded-full bg-green-400 text-black font-semibold">
              Admin Portal
            </button>

          </div>
        </div>

        {/* MOBILE */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-6 border-t border-white/10 pt-6 flex flex-col gap-5">

          <button onClick={() => scrollToSection("hero-section")} className={`hover:text-green-300 ${active === "hero-section" ? "text-green-300" : ""}`} >
            Home
          </button>
          <button onClick={() => scrollToSection("explore")} className={`hover:text-green-300 ${active === "explore" ? "text-green-300" : ""}`} >
            Explore
          </button>
          <button onClick={() => scrollToSection("about")} className={`hover:text-green-300 ${active === "about" ? "text-green-300" : ""}`} >
            About
          </button>
          <button onClick={() => scrollToSection("footer")} className={`hover:text-green-300 ${active === "footer" ? "text-green-300" : ""}`} >
            Contact
          </button>

        </div>
      )}
    </nav>
  )
}

export default NavigationBar