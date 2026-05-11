import { Sparkles, Leaf, ShieldCheck, Truck, Recycle, Headphones } from "lucide-react";
import SecondNavigation from "./SecondNavigation";

export default function ServicesSection() {
  const services = [
    {
      icon: <Leaf size={26} />,
      title: "Eco-Friendly Products",
      desc: "Biodegradable and sustainable cleaning solutions designed to protect the environment.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Safe for Humans",
      desc: "Dermatologically safe formulas ensuring protection for families and sensitive skin.",
    },
    {
      icon: <Sparkles size={26} />,
      title: "Advanced Cleaning Tech",
      desc: "High-performance cleaning science for deep stain removal and hygiene control.",
    },
    {
      icon: <Truck size={26} />,
      title: "Islandwide Delivery",
      desc: "Fast and reliable delivery service covering all regions across Sri Lanka.",
    },
    {
      icon: <Recycle size={26} />,
      title: "Sustainable Manufacturing",
      desc: "Responsible production processes minimizing environmental impact.",
    },
    {
      icon: <Headphones size={26} />,
      title: "Customer Support",
      desc: "Dedicated support team available to assist customers with care and speed.",
    },
  ];

  return (
    <>
     <SecondNavigation></SecondNavigation>
    <section className="relative w-full overflow-hidden py-27 px-5 md:px-10 lg:px-20 bg-linear-to-b from-white via-blue-50 to-white">
       
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-blue-700 font-semibold">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4">
            What We <span className="text-blue-700">Offer</span>
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
            NOHAZZ provides innovative, eco-friendly and human-safe cleaning solutions
            with premium service support across Sri Lanka.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((item, i) => (
            <div
              key={i}
              className="
                group relative
                bg-white/70 backdrop-blur-xl
                border border-blue-100
                rounded-3xl
                p-6 md:p-7
                shadow-lg
                hover:shadow-blue-200/40
                hover:-translate-y-2
                transition-all duration-500
              "
            >

              {/* Glow overlay */}
              <div className="
                absolute inset-0 opacity-0
                group-hover:opacity-100
                bg-linear-to-br from-blue-100/40 to-cyan-100/40
                transition duration-500 rounded-3xl
              "></div>

              {/* ICON */}
              <div className="
                relative w-14 h-14
                flex items-center justify-center
                rounded-2xl
                bg-linear-to-br from-blue-600 to-cyan-500
                text-white
                shadow-md
                group-hover:scale-110
                transition
              ">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="relative mt-5">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
    </>
  );
}