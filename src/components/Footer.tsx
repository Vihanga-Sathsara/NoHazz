import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

import { MdEmail } from "react-icons/md"

import brandLogo from "../assets/brand-logo.png"
import companyLogo from "../assets/company-logo.png"

function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-linear-to-br from-black via-[#07130F] to-[#0F3D2E] text-white border-t border-green-400/10">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-5">

            <div className="flex items-center gap-4">

              <img
                src={brandLogo}
                alt="NOHAZZ"
                className="w-16 h-16 object-contain rounded-2xl"
              />

              <div>
                <h2 className="text-2xl font-black tracking-wide text-green-300">
                  NoHAZZ
                </h2>

                <p className="text-sm text-gray-400 tracking-[3px] uppercase">
                  Textile Science
                </p>
              </div>

            </div>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Advanced cleaning science engineered for powerful stain removal,
              low residue performance, and environmentally conscious living.
            </p>

          </div>

          {/* COMPANY */}
          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <img
                src={companyLogo}
                alt="Company Logo"
                className="w-14 h-14 object-contain rounded-xl"
              />

              <h3 className="text-xl font-bold text-white wrap-break-word">
                Green Panther Sri Lanka
              </h3>

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Building a cleaner and greener future through innovation,
              sustainability, and scientific detergent engineering.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-bold text-green-300 mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">

              <a
                href="#hero-section"
                className="hover:text-green-300 transition duration-300"
              >
                Home
              </a>

              <a
                href="#explore"
                className="hover:text-green-300 transition duration-300"
              >
                Explore
              </a>

              <a
                href="#about"
                className="hover:text-green-300 transition duration-300"
              >
                About
              </a>

              <a
                href="#contact"
                className="hover:text-green-300 transition duration-300"
              >
                Contact
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-bold text-green-300 mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* ADDRESS */}
              <div className="flex gap-4 items-start">

                <div className="w-11 h-11 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5 text-green-300" />
                </div>

                <p className="text-gray-300 text-sm leading-relaxed wrap-break-word">
                  No. 1118/5, Dhammodhaya Mawatha,
                  <br />
                  Battaramulla
                </p>

              </div>

              {/* EMAIL */}
              <div className="flex gap-4 items-center">

                <div className="w-11 h-11 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center shrink-0">
                  <MdEmail className="w-5 h-5 text-green-300" />
                </div>

                <a
                  href="mailto:greenpanthersrilanka@gmail.com"
                  className="text-gray-300 hover:text-green-300 text-sm transition break-all"
                >
                  greenpanthersrilanka@gmail.com
                </a>

              </div>

              {/* PHONE */}
              <div className="flex gap-4 items-center">

                <div className="w-11 h-11 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="w-5 h-5 text-green-300" />
                </div>

                <a
                  href="tel:+94770403737"
                  className="text-gray-300 hover:text-green-300 text-sm transition"
                >
                  +94 77 040 3737
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 my-10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 NoHAZZ. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">

            <a
              href="https://web.facebook.com/people/NoHazz/61566160822386/" target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-green-400/20 hover:border-green-400/40 transition duration-300"
            >
              <FaFacebookF className="w-5 h-5 text-green-300" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-green-400/20 hover:border-green-400/40 transition duration-300"
            >
              <FaInstagram className="w-5 h-5 text-green-300" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-green-400/20 hover:border-green-400/40 transition duration-300"
            >
              <FaLinkedinIn className="w-5 h-5 text-green-300" />
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer