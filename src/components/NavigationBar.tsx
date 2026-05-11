import { useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from "../assets/brand-logo.png"

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "News & Events", path: "/news-events" },
    { name: "Products", path: "/products" },
    {name: "Contact", path: "/contact"}
  ]

  const openNewTab = (path: string | URL | undefined) => {
    setIsOpen(false)
    window.open(path, "_blank", "noopener,noreferrer")
  }

  return (
    <nav className="
      w-full
      sticky top-0 z-50
      px-4 md:px-10 py-4

      /* 💧 Water Glass Effect */
      bg-white/10 backdrop-blur-2xl
      border border-white/20
      shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden
    ">

      {/* 💧 Water glow blobs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-300/30 rounded-full blur-3xl"></div>

      <div className="relative flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => openNewTab("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={Logo} className="w-30 h-10 object-contain" />
          
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">

          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => openNewTab(item.path)}
              className="
                text-gray-700 font-medium
                hover:text-blue-600
                transition relative
                cursor-pointer
              "
            >
              {item.name}

              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
          ))}

        </div>

        {/* BUTTONS */}
        <div className="hidden md:flex gap-3">

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
            cursor-pointer
          ">
            Admin Portal
          </button>

        </div>

        {/* MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-blue-700 cursor-pointer"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="
          mt-4 p-5 flex flex-col gap-3
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          rounded-2xl
        ">

          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => window.open(item.path, "_blank")}
              className="text-left text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
           <button className="
            px-5 py-2 rounded-full
            bg-green-600 text-white
            hover:bg-green-700 transition
            cursor-pointer
          ">
            Customer Portal
          </button>

          <button className="
            px-5 py-2 rounded-full
            bg-blue-600 text-white
            hover:bg-blue-700 transition
            cursor-pointer
          ">
            Admin Portal
          </button>

        </div>
      )}

    </nav>
  )
}

export default NavigationBar