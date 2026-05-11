import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative w-full py-24 px-5 md:px-10 lg:px-20 bg-linear-to-b from-white via-blue-50 to-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE INFO */}
        <div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Get in <span className="text-blue-700">Touch</span>
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <FaMapMarkerAlt className="text-blue-600" />
              </div>
              <p className="text-gray-600 text-sm">
                Battaramulla, Sri Lanka
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <MdEmail className="text-blue-600" />
              </div>
              <p className="text-gray-600 text-sm break-all">
                greenpanthersrilanka@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <FaPhoneAlt className="text-blue-600" />
              </div>
              <p className="text-gray-600 text-sm">
                +94 77 040 3737
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-xl p-6 md:p-10">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-600">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full mt-2 p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition resize-none"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}