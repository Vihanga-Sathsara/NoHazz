import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/brand-logo.png";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "News & Events", path: "/news-events" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  const openNewTab = (path: string) => {
    setIsOpen(false);
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="
      w-full sticky top-0 z-50
      px-4 md:px-6 lg:px-10 py-3 md:py-4
      bg-white/10 backdrop-blur-2xl
      border border-white/20
       overflow-hidden
    ">

      {/* glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-300/30 rounded-full blur-3xl"></div>

      <div className="relative flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => openNewTab("/")}
          className="cursor-pointer"
        >
          <img
            src={Logo}
            className="w-28 md:w-32 lg:w-36 object-contain"
          />
        </div>

        {/* DESKTOP ONLY MENU (lg+) */}
        <div className="hidden lg:flex items-center gap-8">

          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => openNewTab(item.path)}
              className="
                text-gray-700 font-medium
                hover:text-blue-600 transition
                relative
              "
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* DESKTOP ONLY BUTTONS (lg+) */}
        <div className="hidden lg:flex gap-3">

          <button className="px-5 py-2 rounded-full bg-green-600 text-white">
            Customer
          </button>

          <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
            Admin
          </button>

        </div>

        {/* BURGER (MOBILE + TABLET ONLY) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-blue-700"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE + TABLET MENU */}
      {isOpen && (
        <div className="
          mt-4 p-4 flex flex-col gap-3
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          rounded-2xl lg:hidden
        ">

          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => openNewTab(item.path)}
              className="text-left text-gray-700 hover:text-blue-600"
            >
              {item.name}
            </button>
          ))}

          <button className="px-4 py-2 bg-green-600 text-white rounded-full">
            Customer Portal
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-full">
            Admin Portal
          </button>

        </div>
      )}

    </nav>
  );
}

export default NavigationBar;