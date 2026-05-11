import SecondNavigation from "./SecondNavigation"
import companyLogo from "../assets/company-logo.png"
import brandLog from "../assets/brand-logo.png"

export default function AboutPage() {
  return (
    <>
      <SecondNavigation></SecondNavigation>
    <div className="relative w-full bg-linear-to-b from-white via-blue-50 to-white overflow-hidden py-27">
        
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/20 blur-3xl rounded-full"></div>

        
      {/* HERO */}
      <section className="relative text-center py-24 px-5 md:px-10 lg:px-20">

        <p className="text-sm uppercase tracking-[0.4em] text-blue-700 font-semibold">
          About Us
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4">
          Building a <span className="text-blue-700">Cleaner Future</span>
        </h1>

        <div className="w-24 h-1 bg-blue-700 mx-auto mt-6 rounded-full"></div>

        <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-sm md:text-lg leading-relaxed">
          Green Panther Pvt Ltd is a Sri Lankan eco-innovation company focused on sustainable cleaning solutions that protect people and the environment.
        </p>

      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center justify-center py-6">

        <div className="flex justify-center lg:justify-end">
            <img
            src={companyLogo}
            alt="Company Logo"
            className="w-40 sm:w-56 md:w-64 lg:w-72 h-auto object-contain"
            />
        </div>

        <div className="flex justify-center lg:justify-start">
            <img
            src={brandLog}
            alt="Brand Logo"
            className="w-40 sm:w-56 md:w-64 lg:w-72 h-auto object-contain"
            />
        </div>

</section>

      {/* STORY SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-10">

        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8 md:p-12">

          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-5">
            Our Story
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Founded with a vision to revolutionize cleaning solutions in Sri Lanka, Green Panther Pvt Ltd focuses on eco-friendly detergent technology that is safe for families and the environment. We combine innovation, sustainability, and performance to deliver world-class cleaning products.
          </p>

        </div>

      </section>

      {/* VISION / MISSION */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* VISION */}
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To become Sri Lanka’s most trusted eco-cleaning brand through innovation, sustainability, and excellence in service.
          </p>
        </div>

        {/* MISSION */}
        <div className="bg-cyan-50 border border-cyan-100 rounded-3xl p-8 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-cyan-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To create sustainable cleaning solutions while building 13,000+ green business opportunities through innovation and technology.
          </p>
        </div>

      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-10">

        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            "Sustainability",
            "Innovation",
            "Integrity",
            "Customer Focus"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 border border-white/40 backdrop-blur-xl rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <h3 className="font-semibold text-blue-700">{item}</h3>
            </div>
          ))}

        </div>

      </section>

      {/* STATS */}
      <section className="py-20 px-5 md:px-10 lg:px-20 text-center">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div>
            <h3 className="text-3xl font-black text-blue-700">2024</h3>
            <p className="text-gray-600">Founded</p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-blue-700">13K+</h3>
            <p className="text-gray-600">Opportunities</p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-blue-700">100%</h3>
            <p className="text-gray-600">Eco Safe</p>
          </div>

          <div>
            <h3 className="text-3xl font-black text-blue-700">Sri Lanka</h3>
            <p className="text-gray-600">Based</p>
          </div>

        </div>

      </section>

    </div>
    </>
  );
}