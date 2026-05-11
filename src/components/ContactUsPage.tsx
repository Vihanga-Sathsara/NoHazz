import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { useState } from "react";

import Footer from "./Footer";
import SecondNavigation from "./SecondNavigation";
import Location from "./Location";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Message sent successfully 🚀");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <SecondNavigation></SecondNavigation>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-40 pb-24 px-5 md:px-10 lg:px-20 bg-linear-to-b from-blue-950 via-slate-900 to-blue-950">

        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto text-center">

          <p className="text-blue-300 uppercase tracking-[0.4em] text-xs md:text-sm font-semibold">
            Contact Us
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Let’s Build a
            <span className="text-cyan-400"> Cleaner Future</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-sm md:text-lg leading-relaxed">
            Connect with Green Panther noHazz for eco-friendly cleaning
            solutions, partnerships, product inquiries, and customer support.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative w-full py-27 px-5 md:px-10 lg:px-20 bg-linear-to-b from-white via-blue-50 to-white overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-blue-700 uppercase tracking-[0.3em] text-sm font-semibold">
              Reach Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
              Get in <span className="text-blue-700">Touch</span>
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed text-sm md:text-base">
              We’d love to hear from you. Whether you have questions about our
              products, partnerships, or customer support, our team is ready to
              assist you.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-6">

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shadow-sm">
                  <FaMapMarkerAlt className="text-blue-600 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Office Address
                  </h4>

                  <p className="text-gray-600 text-sm mt-1">
                    No. 1118/5, Dhammodhaya Mawatha,
                    <br />
                    Battaramulla, Sri Lanka
                  </p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shadow-sm">
                  <MdEmail className="text-blue-600 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Email Address
                  </h4>

                  <a
                    href="mailto:greenpanthersrilanka@gmail.com"
                    className="text-gray-600 text-sm mt-1 hover:text-blue-700 transition break-all"
                  >
                    greenpanthersrilanka@gmail.com
                  </a>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shadow-sm">
                  <FaPhoneAlt className="text-blue-600 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Phone Number
                  </h4>

                  <a
                    href="tel:+94770403737"
                    className="text-gray-600 text-sm mt-1 hover:text-blue-700 transition"
                  >
                    +94 77 040 3737
                  </a>
                </div>

              </div>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-10">

              <a
                href="#"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 transition"
              >
                <FaFacebookF className="text-blue-600" />
              </a>

              <a
                href="#"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-pink-50 hover:border-pink-300 hover:-translate-y-1 transition"
              >
                <FaInstagram className="text-pink-600" />
              </a>

              <a
                href="#"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 transition"
              >
                <FaLinkedinIn className="text-blue-700" />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/80 backdrop-blur-2xl border border-blue-100 rounded-4xl shadow-[0_20px_80px_rgba(37,99,235,0.08)] p-6 md:p-10">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>

                <label className="text-sm text-gray-600">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full mt-2 p-4 rounded-2xl border border-gray-200 bg-white/70 focus:border-blue-500 outline-none transition"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-sm text-gray-600">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full mt-2 p-4 rounded-2xl border border-gray-200 bg-white/70 focus:border-blue-500 outline-none transition"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-sm text-gray-600">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full mt-2 p-4 rounded-2xl border border-gray-200 bg-white/70 focus:border-blue-500 outline-none transition resize-none"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:scale-[1.02] hover:shadow-xl transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>
        <Location />

      {/* FOOTER */}
      <Footer />
    </>
  );
}