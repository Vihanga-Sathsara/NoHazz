import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import brandLogo from "../assets/brand-logo.png";
import companyLogo from "../assets/company-logo.png";

function Footer() {
  const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "News & Events", link: "/news-events" },
  { name: "Products", link: "/products" },
  {name: "Contact", link: "/contact" }
]

const socials = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/nohazlk",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/yourpage",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/yourpage",
  },
];
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-white via-blue-100 to-white text-gray-800 border-t border-gray-300 w-full">

      {/* SOFT BACKGROUNDS (matching previous blue/green sections) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-full mx-auto px-5 sm:px-8 lg:px-16 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* BRAND */}
          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <img
                src={brandLogo}
                alt="NOHAZZ"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-2xl bg-white p-2 shadow-sm"
              />

              <div>
                <h2 className="text-2xl font-black text-blue-700 tracking-wide">
                  noHazz
                </h2>
              </div>

            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced cleaning science engineered for powerful stain removal,
              low residue performance, and environmentally conscious living.
            </p>

          </div>

          {/* COMPANY */}
          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <img
                src={companyLogo}
                alt="Company"
                className="w-12 h-12 object-contain rounded-xl bg-white p-2 shadow-sm"
              />

              <h3 className="text-lg font-bold text-gray-900">
                Green Panther Sri Lanka
              </h3>

            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Building a cleaner and greener future through innovation,
              sustainability, and scientific detergent engineering.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">

             {quickLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => window.open(item.link, "_blank")}
                  className="
                    relative w-fit text-gray-700
                    hover:text-blue-700 transition
                    group cursor-pointer
                  "
                >
                  {item.name}

                  {/* underline effect */}
                  <span
                    className="
                      absolute left-0 -bottom-1
                      w-0 h-0.5 bg-blue-600
                      group-hover:w-full
                      transition-all duration-300
                    "
                  ></span>
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-lg font-bold text-blue-700 mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* ADDRESS */}
              <div className="flex gap-4">

                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  No. 1118/5, Dhammodhaya Mawatha,
                  <br />
                  Battaramulla
                </p>

              </div>

              {/* EMAIL */}
              <div className="flex gap-4 items-center">

                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <MdEmail className="text-blue-600" />
                </div>

                <a
                  href="mailto:greenpanthersrilanka@gmail.com"
                  className="text-gray-600 text-sm hover:text-blue-700 transition break-all"
                >
                  greenpanthersrilanka@gmail.com
                </a>

              </div>

              {/* PHONE */}
              <div className="flex gap-4 items-center">

                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <FaPhoneAlt className="text-blue-600" />
                </div>

                <a
                  href="tel:+94770403737"
                  className="text-gray-600 text-sm hover:text-blue-700 transition"
                >
                  +94 77 040 3737
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-gray-300"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © 2026 NoHAZZ. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-3">
  {socials.map((item, i) => {
    const Icon = item.icon;

    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-10 h-10
          rounded-full
          bg-white
          border border-gray-200
          flex items-center justify-center
          hover:bg-blue-50
          hover:border-blue-300
          hover:-translate-y-1
          transition
        "
      >
        <Icon className="text-blue-600" />
      </a>
    );
  })}
</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer